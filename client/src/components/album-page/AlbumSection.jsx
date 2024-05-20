import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbumsByProjectId } from '../../store/album/album-actions';
import Loader from '../ui/Loader';
import PText from '../PText';

const SAlbumSection = styled.div`
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

const AlbumSection = () => {
  const { projectIdRef } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const album = useSelector((state) => state.album.albums);

  useEffect(() => {
    setIsLoading(true);

    try {
      dispatch(fetchAlbumsByProjectId(projectIdRef)).then(() => {
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  }, [dispatch, projectIdRef]);

  const renderAlbums = () => {
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

    if (album.length === 0) {
      return (
        <PText fontSize="2rem" color="primaryGrey">
          Empty
        </PText>
      );
    }

    return album.map((album) => {
      return <Thumbnail item={album} type="album" key={album.id} />;
    });
  };

  return (
    <SAlbumSection>
      <Center>
        <SH2>ALBUMS</SH2>
        <SGridContainer>{renderAlbums()}</SGridContainer>
      </Center>
    </SAlbumSection>
  );
};

export default AlbumSection;
