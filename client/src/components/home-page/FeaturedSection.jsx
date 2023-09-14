import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../../store/project/project-actions';
import Loader from '../ui/Loader';

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
  const project = useSelector((state) => state.project);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    dispatch(fetchProject());
  }, [dispatch]);

  const renderFeaturedGaleries = () => {
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

    return project
      .filter((project) => project.featured)
      .map((project) => (
        <Thumbnail item={project} type="featured" key={project.id} />
      ));
  };

  return (
    <SFeatureSection>
      <Center>
        <SH2>FEATURED GALERIES</SH2>
        <SGridContainer>{renderFeaturedGaleries()}</SGridContainer>
      </Center>
    </SFeatureSection>
  );
}
