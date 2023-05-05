import React, { useEffect } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbum } from '../../store/album/album-actions';

const SAlbumProject = styled.div`
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
  const { projectIdRef } = useParams();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  console.log('param', projectIdRef);

  useEffect(() => {
    dispatch(fetchAlbum(projectIdRef));
  }, [dispatch, projectIdRef]);

  return (
    <SAlbumProject>
      <Center>
        <SH2>ALBUMS</SH2>
        <SGridContainer>
          {album.map((album) => {
            console.log('Album', album);
            return <Thumbnail item={album} key={album.id} />;
          })}
        </SGridContainer>
      </Center>
    </SAlbumProject>
  );
};

export default AlbumsSection;
