import React from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';

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
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export default function FeaturedGaleries() {
  return (
    <SFeatureSection>
      <Center>
        <SH2>FEATURED GALERIES</SH2>
        <SGridContainer>
          <Thumbnail item={''} />
          <Thumbnail item={''} />
          <Thumbnail item={''} />
        </SGridContainer>
      </Center>
    </SFeatureSection>
  );
}
