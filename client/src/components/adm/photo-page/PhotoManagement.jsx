import React, { useEffect, useState } from 'react';
import Input from '../../ui/Input';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../../store/project/project-actions';
import {
  fetchAlbumsByProjectId,
  fetchPhotosByAlbumId,
} from '../../../store/album/album-actions';
import Loader from '../../ui/Loader';
import Thumbnail from '../../Thumbnail';
import { albumActions } from '../../../store/album/album-slice';
import PText from '../../PText';

const SPhotosManagementContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
  padding: 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SComboBoxContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SFlexContainer = styled.div`
  margin-top: 7rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: space-between;
  align-items: center;
`;

const SFlexContainerCenter = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PhotoManagement = () => {
  const project = useSelector((state) => state.project);
  const album = useSelector((state) => state.album.albums);
  const photo = useSelector((state) => state.album.photos);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSolo, setIsLoadingSolo] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [albumId, setAlbumId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject());
    return () => {
      dispatch(albumActions.setPhotos([]));
    };
  }, [dispatch]);

  const handleProjectChange = (e) => {
    const selectedProjectValue = e.target.value;
    setProjectId(selectedProjectValue);

    dispatch(fetchAlbumsByProjectId(selectedProjectValue));
  };

  const handleAlbumChange = (e) => {
    const selectedAlbumValue = e.target.value;
    setAlbumId(selectedAlbumValue);
    setIsLoading(true);

    dispatch(fetchPhotosByAlbumId(projectId, selectedAlbumValue))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleDelete = (albumId, photoLink) => {
    console.log('coverIMG Dentro do managemen:', photoLink);
    setAlbumId(albumId);
    setIsLoadingSolo((prevState) => ({
      ...prevState,
      [albumId]: true,
    }));
    console.log(albumId, photoLink);
  };

  return (
    <SPhotosManagementContainer>
      <SComboBoxContainer>
        <Input
          input={{
            comboBox: 'comboBox',
            name: 'projecId',
            placeHolder: 'PROJECT SELECT',
            options: project,
            value: projectId,
            onChange: handleProjectChange,
          }}
        />
        {projectId && (
          <Input
            input={{
              comboBox: 'comboBox',
              name: 'albumId',
              placeHolder: 'ALBUM SELECT',
              options: album,
              value: albumId,
              onChange: handleAlbumChange,
            }}
          />
        )}
      </SComboBoxContainer>
      <SFlexContainer>
        {isLoading ? (
          <SFlexContainerCenter>
            <Loader width={'7rem'} height={'7rem'} />
          </SFlexContainerCenter>
        ) : projectId === '' ? (
          <SFlexContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              Please select one project
            </PText>
          </SFlexContainerCenter>
        ) : (albumId === '') & (projectId !== '') ? (
          <SFlexContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              Please select one album
            </PText>
          </SFlexContainerCenter>
        ) : photo.length === 0 && albumId ? (
          <SFlexContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              There's no photo inside this album
            </PText>
          </SFlexContainerCenter>
        ) : (
          photo.map((photo) => (
            <Thumbnail
              item={photo}
              isLoadingSolo={isLoadingSolo}
              type="photo"
              key={photo.id}
              onDelete={handleDelete}
              id={photo.id}
            />
          ))
        )}
      </SFlexContainer>
    </SPhotosManagementContainer>
  );
};
