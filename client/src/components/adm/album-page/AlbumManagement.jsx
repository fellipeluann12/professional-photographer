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
  createAlbum,
  deleteAlbum,
  fetchAlbumsByProjectId,
} from '../../../store/album/album-actions';
import Thumbnail from '../../Thumbnail';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';
import ReactModal from 'react-modal';
import { Modal } from '../../Modal';
import { albumActions } from '../../../store/album/album-slice';
import ReactPaginate from 'react-paginate';

const SAlbumManagementContainer = styled.div`
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

const customStyles = {
  content: {
    borderRadius: '1rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: `#1A1A1A`,
  },
  overlay: { zIndex: 1000 },
};

export const AlbumManagement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSolo, setIsLoadingSolo] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const album = useSelector((state) => state.album.albums);

  const perPage = 9;
  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const albumsToShow = album.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  console.log('albunstoShow lenght:', albumsToShow.length);

  const handleProjectChange = (e) => {
    const selectedProjectId = e.target.value;
    setProjectId(selectedProjectId);
    setAlbumId('');
    setIsLoading(true);

    dispatch(fetchAlbumsByProjectId(selectedProjectId))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const handleDelete = (albumId, coverImg) => {
    console.log('coverIMG Dentro do managemen:', coverImg);
    setAlbumId(albumId);
    setIsLoadingSolo((prevState) => ({
      ...prevState,
      [albumId]: true,
    }));
    console.log(projectId, albumId);

    dispatch(deleteAlbum(projectId, albumId, coverImg))
      .then(() => {
        setIsLoadingSolo((prevState) => ({
          ...prevState,
          [albumId]: false,
        }));
        notifySuccess('Album deleted.');
        if (albumsToShow.length === 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      })
      .catch((error) => {
        setIsLoadingSolo(false);
        notifyError(error);
      });
  };

  const handleEdit = (album) => {
    setAlbumId(album);
    setIsModalOpen(true);
  };

  const handleSave = (id, projectId, data) => {
    setIsLoadingModal(true);
    const { title, description, coverImg } = data;
    const coverImgFile = coverImg[0];

    const updatedData = {
      title,
      description,
      projectId,
      coverImg: coverImgFile,
    };

    const dispatchAndUpdateAlbum = (coverImg) => {
      dispatch(
        albumActions.updateAlbum({
          id,
          data: { id, ...updatedData, coverImg },
        })
      );
    };

    dispatch(createAlbum({ id, ...updatedData }))
      .then((response) => {
        const albumResponse = response;
        const { coverImg } = albumResponse;
        console.log('response: ', coverImg);
        dispatchAndUpdateAlbum(coverImg); // Dispatch the updateAlbum action
        console.log('ta chegando aq?');
        notifySuccess('Project updated.');
        setIsLoadingModal(false);
        closeModal();
      })
      .catch((error) => {
        console.log('error no consolelog do handlesave', error);
        setIsLoadingModal(false);
        notifyError(error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    setAlbumId(null);
  };
  console.log('album undefined pq?: ', album);

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
            placeHolder: 'PROJEC SELECT',
            options: project,
            value: projectId,
            onChange: handleProjectChange,
          }}
        />
      </SComboBoxContainer>
      <SFlexContainer>
        {isLoading ? (
          <SFlexContainerCenter>
            <Loader width="7rem" height="7rem" />
          </SFlexContainerCenter>
        ) : album.length === 0 && projectId ? (
          <SFlexContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              There's no albums inside this project
            </PText>
          </SFlexContainerCenter>
        ) : projectId === '' ? (
          <SFlexContainerCenter>
            <PText fontSize="1.5rem" color="primaryGrey">
              Please select one project
            </PText>
          </SFlexContainerCenter>
        ) : (
          albumsToShow.map((album) => (
            <Thumbnail
              item={album}
              isLoadingSolo={isLoadingSolo}
              type="adm"
              key={album.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
              id={album.id}
            />
          ))
        )}
        {albumId && (
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={1000}
          >
            <Modal
              item={albumId}
              heading="ALBUM"
              type="album"
              closeModal={closeModal}
              handleSave={handleSave}
              isLoadingModal={isLoadingModal}
            />
          </ReactModal>
        )}
      </SFlexContainer>
      {!isLoading && projectId && album.length > 9 && (
        <SPaginationContainer>
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Math.ceil(album.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={SPaginationContainer}
            activeClassName="active"
            forcePage={currentPage}
          />
        </SPaginationContainer>
      )}
    </SAlbumManagementContainer>
  );
};
