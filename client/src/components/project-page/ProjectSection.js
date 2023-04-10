import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchAlbumsData } from '../../store/gallery/albums-actions';
import Thumbnail from '../Thumbnail';
import Center from '../Center';

const SProjectsSection = styled.div`
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
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.albums.items);

  useEffect(() => {
    dispatch(fetchAlbumsData());
  }, [dispatch]);

  return (
    <SProjectsSection>
      <Center>
        <SH2>PROJECTS</SH2>
        <SGridContainer>
          {projects.map((projects) => {
            console.log('Projects', projects);
            return <Thumbnail item={projects} key={projects.id} />;
          })}
        </SGridContainer>
      </Center>
    </SProjectsSection>
  );
};

export default ProjectsSection;
