import React from 'react';
import styled from 'styled-components';
import Input from '../../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProject } from '../../../store/project/project-actions';
import { useState } from 'react';
import PText from '../../PText';
import Loader from '../../ui/Loader';
import {
  deleteAlbum,
  fetchAlbumsByProjectId,
} from '../../../store/album/album-actions';
import Thumbnail from '../../Thumbnail';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';

const SAlbumManagementContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
  padding: 0 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid #f00 !important;
`;

const SComboBoxContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SGridContainer = styled.div`
  margin-top: 7rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

const SGridContainerCenter = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AlbumManagement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSolo, setIsLoadingSolo] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const album = useSelector((state) => state.album.albums);
  const [projectId, setProjectId] = useState('');
  const [albumId, setAlbumId] = useState('');

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const handleProjectChange = (e) => {
    const selectedProjectId = e.target.value;
    setProjectId(selectedProjectId);
    dispatch(fetchAlbumsByProjectId(selectedProjectId));
  };

  const handleDelete = (albumId) => {
    setAlbumId(albumId);
    setIsLoadingSolo((prevState) => ({
      ...prevState,
      [albumId]: true,
    }));
    console.log(projectId, albumId);

    dispatch(deleteAlbum(projectId, albumId))
      .then(() => {
        setIsLoadingSolo((prevState) => ({
          ...prevState,
          [albumId]: false,
        }));
        notifySuccess('Album deleted.');
      })
      .catch((error) => {
        setIsLoadingSolo(false);
        notifyError(error);
      });
  };

  return (
    <SAlbumManagementContainer>
      <SComboBoxContainer>
        <PText color="primaryGrey" fontSize="2rem">
          ↓ Project
        </PText>
        <Input
          input={{
            comboBox: 'comboBox',
            name: 'projecId',
            options: project,
            value: projectId,
            onChange: handleProjectChange,
          }}
        />
      </SComboBoxContainer>
      <SGridContainer>
        {isLoading ? (
          <SGridContainerCenter>
            <Loader width="7rem" height="7rem" />
          </SGridContainerCenter>
        ) : album.length === 0 ? (
          <SGridContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              There's no albums inside this project
            </PText>
          </SGridContainerCenter>
        ) : projectId === '' ? (
          <SGridContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              Please select one project
            </PText>
          </SGridContainerCenter>
        ) : (
          projectId &&
          album.map((album) => (
            <Thumbnail
              item={album}
              isLoadingSolo={isLoadingSolo}
              type="adm"
              key={album.id}
              onDelete={handleDelete}
              onEdit={''}
              id={album.id}
            />
          ))
        )}
      </SGridContainer>
      {console.log('length', album.length)}
    </SAlbumManagementContainer>
  );
};
