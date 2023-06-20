import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 0.2rem 0.2rem 0 0rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -moz-box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -webkit-box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -o-box-shadow: 2px 2px 1px ${({ theme }) => theme.colors.secondaryGreen};

  ${(props) =>
    props.isAdm === true &&
    css`
      border-radius: 1rem;
    `}

  ${(props) =>
    props.featured &&
    css`
      transition: 0.4s ease-out transform;

      &:hover {
        transform: translate(0%, -3%);
      }
    `}
`;

export const CardYellowStar = styled.svg`
  position: absolute;
  top: 0.812rem;
  right: 0.4rem;
  height: 1.5rem;
  width: 2rem;
`;

export const CardEditTool = styled.div`
  height: 4.5rem;
  width: 4rem;
  cursor: pointer;
`;

export const CardDeleteTool = styled.div`
  height: 4.5rem;
  width: 4rem;
  cursor: pointer;
`;

export const CardTextBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 100%;

  & h3,
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -moz-only-whitespace: nowrap;
    overflow: hidden;
  }
`;

export const CardHeading = styled.h3`
  font-size: 2.5rem;
  color: #0acf6d;
  text-shadow: 3px 3px 2px black;
  max-width: 100%;
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
