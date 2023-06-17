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

const Loader = ({ width, height }) => {
  return <SLoader width={width} height={height}></SLoader>;
};

export default Loader;
