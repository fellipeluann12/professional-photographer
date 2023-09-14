import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProject } from '../../store/project/project-actions';
import Thumbnail from '../Thumbnail';
import Center from '../Center';
import Loader from '../ui/Loader';

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
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

const ProjectSection = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    try {
      dispatch(fetchProject())
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          throw error;
        });
    } catch (error) {}
  }, [dispatch]);

  const renderProjects = () => {
    if (isLoading) {
      const loaderCount = 3;
      const loaders = Array.from({ length: loaderCount }, (_, index) => (
        <Loader
          album="true"
          width="100%"
          height={200}
          style={{ flex: '1 1 35rem' }}
          key={index}
        />
      ));

      return loaders;
    }

    return project.map((project) => {
      return <Thumbnail item={project} type="project" key={project.id} />;
    });
  };

  return (
    <SProjectSection>
      <Center>
        <SH2>PROJECTS</SH2>
        <SGridContainer>{renderProjects()}</SGridContainer>
      </Center>
    </SProjectSection>
  );
};

export default ProjectSection;
