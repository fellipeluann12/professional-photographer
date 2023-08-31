import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={'35rem'}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#b3b3b3"
    foregroundColor="#828282"
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

export default Loader;
