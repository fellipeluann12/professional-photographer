import React from 'react';
import styled from 'styled-components';
import Center from '../Center';

const SAlbumsProject = styled.div`
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

const AlbumsSection = () => {
  return (
    <SAlbumsProject>
      <Center>
        <SH2>ALBUMS</SH2>
        <SGridContainer></SGridContainer>
      </Center>
    </SAlbumsProject>
  );
};

export default AlbumsSection;
