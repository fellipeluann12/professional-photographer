import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  position: absolute;
  top: 80px;
  width: 16.4rem;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.primaryBlack};
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  :not(:last-child) {
    margin-right: 3rem;
  }

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
    display: flex;
    align-items: center;
    width: 100%;
    height: 10rem;
    font-size: 3rem;
  }
`;

export const NLink = styled(NavLink)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.primaryGrey};
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;

  &:hover {
    box-shadow: ${(p) => p.theme.boxShadows.navBar};
  }

  &.active {
    color: ${({ to }) => (to === '#' ? '' : 'white')};
  }
`;
