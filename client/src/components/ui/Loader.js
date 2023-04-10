import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
`;

const Loader = styled.div`
  display: block;
  margin: 0 auto;
  border: 0.2em solid ${({ theme }) => theme.colors.primaryGrey};
  border-top: 0.2em solid transparent;
  border-radius: 50%;
  width: 3.28571429rem;
  height: 3.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default Loader;
