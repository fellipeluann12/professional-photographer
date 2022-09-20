import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchAlbumsData } from '../../store/gallery/albums-actions';
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
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.items);

  useEffect(() => {
    dispatch(fetchAlbumsData());
  }, [dispatch]);

  return (
    <SPersonalSection>
      <Center>
        <SH2>PERSONAL</SH2>
        <SGridContainer>
          {albums.map((item, index) => {
            return <PhotoThumbnail item={item} key={index} />;
          })}
        </SGridContainer>
      </Center>
    </SPersonalSection>
  );
}
