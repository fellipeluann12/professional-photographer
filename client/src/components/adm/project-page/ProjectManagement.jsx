import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProject } from '../../../store/project/project-actions';
import Thumbnail from '../../Thumbnail';

const SProjectManagementContainer = styled.div``;

const SGridContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
`;

export const ProjectManagement = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <SProjectManagementContainer>
      <SGridContainer>
        {project.map((project) => {
          return <Thumbnail item={project} type="project" key={project.id} />;
        })}
      </SGridContainer>
    </SProjectManagementContainer>
  );
};
