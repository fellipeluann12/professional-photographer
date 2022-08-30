import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 0.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryGreen};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGreen};
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  /* box-shadow: -5px -5px 5px ${({ theme }) => theme.colors.secondaryGreen};
  -moz-box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -webkit-box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.secondaryGreen};
  -o-box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.secondaryGreen}; */

  ${(props) =>
    props.featured &&
    css`
      transition: 0.4s ease-out transform;

      &:hover {
        transform: translate(0%, -3%);
      }

      @media ${({ theme }) => theme.breakpoints.lgMaxW} {
        flex: 0 1 70rem;
      }
    `}
`;
