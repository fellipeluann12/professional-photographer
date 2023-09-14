import React, { useEffect, useState } from 'react';
import Input from '../../ui/Input';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../../store/project/project-actions';
import {
  deletePhotoFromAlbum,
  fetchAlbumsByProjectId,
  fetchPhotosByAlbumId,
} from '../../../store/album/album-actions';
import Loader from '../../ui/Loader';
import Thumbnail from '../../Thumbnail';
import { albumActions } from '../../../store/album/album-slice';
import PText from '../../PText';
import ReactPaginate from 'react-paginate';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';

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

const SPaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1.8rem;
  font-weight: 800;

  > ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding: 0 1rem;

    > li {
      display: inline-block;
      margin: 0 0.5rem;
      padding: 1rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primaryGreen};
      background: transparent;
      border-radius: 0.63rem;
      border: 1px solid ${({ theme }) => theme.colors.primaryGreen};

      > a {
        padding: 3rem;
      }

      &.active {
        color: ${({ theme }) => theme.colors.secondaryGreen};
        background-color: ${({ theme }) => theme.colors.secondaryBlack};
      }
    }
  }
`;

export const PhotoManagement = () => {
  const project = useSelector((state) => state.project);
  const album = useSelector((state) => state.album.albums);
  const photo = useSelector((state) => state.album.photos);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSolo, setIsLoadingSolo] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  const perPage = 9;
  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const photosToShow = photo.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchProject());
    return () => {
      dispatch(albumActions.setPhotos([]));
    };
  }, [dispatch]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleProjectChange = (e) => {
    const selectedProjectValue = e.target.value;
    setProjectId(selectedProjectValue);
    setAlbumId('');
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

  const handleDelete = (photoId, photoOriginalUrl) => {
    setAlbumId(albumId);
    setIsLoadingSolo((prevState) => ({
      ...prevState,
      [photoId]: true,
    }));

    dispatch(
      deletePhotoFromAlbum(projectId, albumId, photoId, photoOriginalUrl)
    )
      .then(() => {
        setIsLoadingSolo((prevState) => ({
          ...prevState,
          [photoId]: false,
        }));
        notifySuccess('Photo deleted.');
        if (photosToShow.length === 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      })
      .catch((error) => {
        setIsLoadingSolo(false);
        notifyError(error);
      });
  };

  const renderAlbumSelect = () => {
    if (!projectId || !album.length) return null;

    return (
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
    );
  };

  const renderPhotos = () => {
    if (isLoading) {
      const loaderCount = 3;
      const loaders = Array.from({ length: loaderCount }, (_, index) => (
        <Loader
          photo="true"
          width="100%"
          height={200}
          style={{ flex: '1 1 35rem' }}
          key={index}
        />
      ));

      return <SFlexContainer>{loaders}</SFlexContainer>;
    }

    if (projectId === '') {
      return (
        <SFlexContainerCenter>
          <PText fontSize="1.5rem" color="primaryGrey">
            Please select one project
          </PText>
        </SFlexContainerCenter>
      );
    }

    if (albumId === '' && album.length !== 0) {
      return (
        <SFlexContainerCenter>
          <PText fontSize="1.5rem" color="primaryGrey">
            Please select one album
          </PText>
        </SFlexContainerCenter>
      );
    }

    if (album.length < 1) {
      return (
        <SFlexContainerCenter>
          <PText fontSize="1.5rem" color="primaryGrey">
            There's no album inside this project
          </PText>
        </SFlexContainerCenter>
      );
    }

    if (photo.length === 0 && albumId) {
      return (
        <SFlexContainerCenter>
          <PText fontSize="1.5rem" color="primaryGrey">
            There's no photo inside this album
          </PText>
        </SFlexContainerCenter>
      );
    }

    return photosToShow.map((photo) => (
      <Thumbnail
        item={photo}
        isLoadingSolo={isLoadingSolo}
        type="photo"
        key={photo.id}
        onDelete={handleDelete}
        id={photo.id}
      />
    ));
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
        {renderAlbumSelect()}
      </SComboBoxContainer>
      <SFlexContainer>{renderPhotos()}</SFlexContainer>
      {!isLoading && albumId && photo.length > 9 && (
        <SPaginationContainer>
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Math.ceil(photo.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={SPaginationContainer}
            activeClassName="active"
            forcePage={currentPage}
          />
        </SPaginationContainer>
      )}
    </SPhotosManagementContainer>
  );
};
