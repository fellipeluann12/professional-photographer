import React, { useEffect } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumPhotos } from '../../store/album/album-actions';

const SPhotoSection = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  grid-auto-flow: row;
  grid-gap: 4rem;
`;

const PhotoSection = () => {
  const { projectIdRef, albumIdRef } = useParams();
  console.log('projectId first, albumId second', projectIdRef, albumIdRef);
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.album.photos);
  console.log('?', photo);

  useEffect(() => {
    dispatch(fetchAlbumPhotos(projectIdRef, albumIdRef));
  }, [dispatch, projectIdRef, albumIdRef]);

  return (
    <SPhotoSection>
      <Center>
        <SH2>PHOTOS</SH2>
        <SGridContainer>
          {photo.map((photo) => {
            return (
              <Thumbnail item={photo} key={photo.id} type="photo"></Thumbnail>
            );
          })}
        </SGridContainer>
      </Center>
    </SPhotoSection>
  );
};

export default PhotoSection;
