import React from 'react';
import styled from 'styled-components';
import Center from '../Center';
import PhotoThumbnail from '../PhotoThumbnail';

const Wrapper = styled.section`
  padding: 4rem 0rem 4rem;
`;

const H3 = styled.h3`
  font-size: 2.5rem;
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  gap: 3rem;
`;

export default function FeaturedGaleries() {
  return (
    <Wrapper>
      <Center>
        <H3>Featured Galeries</H3>
        <Ul>
          <PhotoThumbnail />
          <PhotoThumbnail />
          <PhotoThumbnail />
        </Ul>
      </Center>
    </Wrapper>
  );
}
