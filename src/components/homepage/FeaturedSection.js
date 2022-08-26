import React from 'react';
import styled from 'styled-components';
import Center from '../Center';
import PhotoThumbnail from '../PhotoThumbnail';

const SFeatureSection = styled.section`
  padding: 4rem 0rem 4rem;
`;

const SH3 = styled.h3`
  font-size: 2.5rem;
  text-align: center;
`;

const SUl = styled.ul`
  display: flex;

  padding-top: 4rem;
  justify-content: center;
  gap: 3rem;

  @media ${({ theme }) => theme.breakpoints.lgMaxW} {
    flex-wrap: wrap;
  }
`;

export default function FeaturedGaleries() {
  return (
    <SFeatureSection>
      <Center>
        <SH3>Featured Galeries</SH3>
        <SUl>
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
        </SUl>
      </Center>
    </SFeatureSection>
  );
}
