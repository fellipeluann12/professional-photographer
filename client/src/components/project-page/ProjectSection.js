import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProject } from '../../store/project/project-actions';
import Thumbnail from '../Thumbnail';
import Center from '../Center';

const SProjectSection = styled.div`
  padding: 7rem 0rem;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
`;

const SGridContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-auto-flow: row;
  grid-gap: 1.25rem;
`;

const ProjectSection = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <SProjectSection>
      <Center>
        <SH2>PROJECTS</SH2>
        <SGridContainer>
          {project.map((project) => {
            return <Thumbnail item={project} type="project" key={project.id} />;
          })}
        </SGridContainer>
      </Center>
    </SProjectSection>
  );
};

export default ProjectSection;
