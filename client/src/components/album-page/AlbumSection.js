import React, { useEffect } from 'react';
import styled from 'styled-components';
import Center from '../Center';
import Thumbnail from '../Thumbnail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbumsByProjectId } from '../../store/album/album-actions';

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
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-auto-flow: row;
  grid-gap: 20px;
`;

const AlbumSection = () => {
  const { projectIdRef } = useParams();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album.albums);
  console.log('param', projectIdRef);

  useEffect(() => {
    dispatch(fetchAlbumsByProjectId(projectIdRef));
  }, [dispatch, projectIdRef]);

  return (
    <SAlbumSection>
      <Center>
        <SH2>ALBUMS</SH2>
        <SGridContainer>
          {album.map((album) => {
            return <Thumbnail item={album} type="album" key={album.id} />;
          })}
        </SGridContainer>
      </Center>
    </SAlbumSection>
  );
};

export default AlbumSection;
