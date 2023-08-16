import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  createProject,
  deleteProject,
  fetchProject,
} from '../../../store/project/project-actions';
import Thumbnail from '../../Thumbnail';
import Loader from '../../ui/Loader';
import PText from '../../PText';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';
import ReactModal from 'react-modal';
import { Modal } from '../../Modal';
import ReactPaginate from 'react-paginate';
import { projectActions } from '../../../store/project/project-slice';

const SProjectManagementContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
  padding: 0 0 5rem;
`;

const SGridContainer = styled.div`
  margin-top: 7rem;
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
    padding: 5rem;

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

export const ProjectManagement = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [isLoadingSolo, setIsLoadingSolo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  const perPage = 10;
  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const projectsToShow = project.slice(startIndex, endIndex);

  useEffect(() => {
    setIsLoading(true);

    try {
      dispatch(fetchProject())
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
    }
  }, [dispatch]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedProject(null);
  };

  const handleDelete = (projectId) => {
    setIsLoadingSolo((prevState) => ({
      ...prevState,
      [projectId]: true,
    }));

    dispatch(deleteProject(projectId))
      .then(() => {
        setIsLoadingSolo((prevState) => ({
          ...prevState,
          [projectId]: false,
        }));
        notifySuccess('Project deleted.');
      })
      .catch((error) => {
        setIsLoadingSolo(false);
        notifyError(error);
      });
  };

  const handleSave = (id, data) => {
    setIsLoadingModal(true);
    const { title, description, coverImg, featured } = data;
    const coverImgFile = coverImg[0];

    const updatedData = {
      title,
      description,
      coverImg: coverImgFile,
      featured,
    };

    dispatch(
      createProject({
        id: id,
        ...updatedData,
      })
    )
      .then((response) => {
        const projectResponse = response;
        const { coverImg } = projectResponse;
        console.log('response: ', projectResponse.coverImg);
        dispatch(
          projectActions.updateProject({
            id,
            data: { id, ...updatedData, coverImg },
          })
        );
        notifySuccess('Project updated.');
        setIsLoadingModal(false);
        closeModal();
      })
      .catch((error) => {
        setIsLoadingModal(false);
        notifyError(error);
      });
  };

  return (
    <SProjectManagementContainer>
      <SGridContainer>
        {isLoading ? (
          <SGridContainerCenter>
            <Loader width="7rem" height="7rem" />
          </SGridContainerCenter>
        ) : project.length === 0 ? (
          <SGridContainerCenter>
            <PText fontSize="3rem" color="primaryGrey">
              Empty
            </PText>
          </SGridContainerCenter>
        ) : (
          projectsToShow.map((project) => (
            <Thumbnail
              item={project}
              isLoadingSolo={isLoadingSolo}
              type="adm"
              key={project.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
              id={project.id}
            />
          ))
        )}
        {selectedProject && (
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={1000}
          >
            <Modal
              item={selectedProject}
              heading="PROJECT"
              type="project"
              closeModal={closeModal}
              handleSave={handleSave}
              isLoadingModal={isLoadingModal}
            />
          </ReactModal>
        )}
      </SGridContainer>
      {!isLoading && (
        <SPaginationContainer>
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Math.ceil(project.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={SPaginationContainer}
            activeClassName="active"
            forcePage={currentPage}
          />
        </SPaginationContainer>
      )}
    </SProjectManagementContainer>
  );
};
