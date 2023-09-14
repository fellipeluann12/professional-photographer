import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumPhotos } from '../../store/album/album-actions';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Loader from '../ui/Loader';

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
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.mdMaxW} {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

const PhotoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { projectIdRef, albumIdRef } = useParams();
  const photos = useSelector((state) => state.album.photos);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);

    try {
      dispatch(fetchAlbumPhotos(projectIdRef, albumIdRef))
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          throw error;
        });
    } catch (error) {}
  }, [dispatch, projectIdRef, albumIdRef]);

  const renderPhotos = () => {
    if (isLoading) {
      const loaderCount = 1;
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

    return <ImageGallery items={photos} />;
  };

  return (
    <SPhotoSection>
      <Center>
        <SH2>PHOTOS</SH2>
        <SGridContainer>{renderPhotos()}</SGridContainer>
      </Center>
    </SPhotoSection>
  );
};

export default PhotoSection;
