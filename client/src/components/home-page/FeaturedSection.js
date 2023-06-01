import React, { useEffect } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../store/project/project-actions';

const SFeatureSection = styled.section`
  padding: 4rem 0rem 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
  text-align: center;
`;

const SH2 = styled.h2`
  font-size: 5rem;
  display: inline-block;
  ${({ theme }) => theme.gradientGreen.word}
`;

const SGridContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-auto-flow: row;
  grid-gap: 20px;
`;

export default function FeaturedGaleries() {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <SFeatureSection>
      <Center>
        <SH2>FEATURED GALERIES</SH2>
        <SGridContainer>
          {project
            .filter((project) => project.featured)
            .map((project) => (
              <Thumbnail item={project} type="project" key={project.id} />
            ))}
        </SGridContainer>
      </Center>
    </SFeatureSection>
  );
}
