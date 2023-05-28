import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 0.2rem 0.2rem 0 0rem;
  align-items: center;
  padding-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -moz-box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -webkit-box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -o-box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};

  ${(props) =>
    props.featured &&
    css`
      transition: 0.4s ease-out transform;

      &:hover {
        transform: translate(0%, -3%);
      }
    `}
`;

export const CardTextBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CardHeading = styled.h3`
  font-size: 2.5rem;
  ${({ theme }) => theme.gradientGreen.word}
`;

export const CardImageContainer = styled.div`
  height: 15.625rem;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
