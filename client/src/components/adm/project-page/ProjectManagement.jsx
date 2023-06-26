import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  deleteProject,
  fetchProject,
} from '../../../store/project/project-actions';
import Thumbnail from '../../Thumbnail';
import Loader from '../../ui/Loader';
import PText from '../../PText';
import { notifyError, notifySuccess } from '../../../assets/functionsHelper';
import ReactModal from 'react-modal';
import { Modal } from '../../Modal';

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
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  const handleEdit = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch(fetchProject());
    setIsModalOpen(!isModalOpen);
    setSelectedProject(null);
  };

  const handleDelete = (projectId) => {
    setIsLoadingDelete((prevState) => ({
      ...prevState,
      [projectId]: true,
    }));

    dispatch(deleteProject(projectId))
      .then(() => {
        setIsLoadingDelete((prevState) => ({
          ...prevState,
          [projectId]: false,
        }));
        notifySuccess('Project deleted.');
      })
      .catch((error) => {
        setIsLoadingDelete(false);
        notifyError(error);
      });
  };

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

  return (
    <SProjectManagementContainer>
      <SGridContainer>
        {isLoading ? (
          <SGridContainerCenter>
            <Loader width="10rem" height="10rem" />
          </SGridContainerCenter>
        ) : project.length === 0 ? (
          <SGridContainerCenter>
            <PText fontSize="3rem" color="primaryGrey">
              Empty
            </PText>
          </SGridContainerCenter>
        ) : (
          project.map((project) => (
            <Thumbnail
              item={project}
              isLoadingDelete={isLoadingDelete}
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
            <Modal item={selectedProject} closeModal={closeModal} />
          </ReactModal>
        )}
      </SGridContainer>
    </SProjectManagementContainer>
  );
};
