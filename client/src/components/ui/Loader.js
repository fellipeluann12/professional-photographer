import React from 'react';
import ContentLoader from 'react-content-loader';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
`;

const SLoader = styled.div`
  display: block;
  margin: 0 auto;
  border: 0.2em solid ${({ theme }) => theme.colors.primaryGrey};
  border-top: 0.2em solid transparent;
  border-radius: 50%;
  width: ${({ width }) => (width ? width : '3.28571429rem')};
  height: ${({ height }) => (height ? height : '3.28571429rem')};
  animation: ${spin} 0.6s linear infinite;
`;

const Loader = (props) => {
  const renderAlbumSkeleton = () => {
    return (
      <ContentLoader
        speed={1.5}
        viewBox="0 0 476 124"
        backgroundColor="rgb(36, 36, 36)"
        foregroundColor="#2e2d2d"
        {...props}
      >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="411" height="6" />
        <circle cx="20" cy="20" r="20" />
        <rect x="0" y="82" rx="3" ry="3" width="411" height="6" />
        <rect x="0" y="92" rx="3" ry="3" width="411" height="6" />
      </ContentLoader>
    );
  };

  const renderPhotoSkeleton = () => {
    return (
      <ContentLoader
        speed={1.5}
        viewBox="0 0 400 460"
        backgroundColor="rgb(36, 36, 36)"
        foregroundColor="#2e2d2d"
        {...props}
      >
        <rect x="0" y="0" rx="36" ry="36" width="400" height="400" />
      </ContentLoader>
    );
  };

  const renderDeleteSkeleton = () => (
    <SLoader width={props.width} height={props.height}></SLoader>
  );

  if (props.album) {
    return renderAlbumSkeleton();
  }

  if (props.photo) {
    return renderPhotoSkeleton();
  }

  if (props.circle) {
    return renderDeleteSkeleton();
  }

  return null; // Default case when none of the props match
};

export default Loader;
