import React from 'react';
import styled from 'styled-components';
import Center from '../Center';
import PhotoThumbnail from '../PhotoThumbnail';

const SPersonalSection = styled.div`
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

export default function PersonalSection() {
  return (
    <SPersonalSection>
      <Center>
        <SH2>Personal</SH2>
        <SGridContainer>
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
        </SGridContainer>
      </Center>
    </SPersonalSection>
  );
}
