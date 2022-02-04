import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  height: 100%;

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;

  /* @media ${(p) => p.theme.breakpoints.lgMaxW} {
    position: absolute;
    top: 8rem;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 8rem);
    background: ${(p) => p.theme.colors.secondaryGrey};
    justify-content: center;
    display: ${(p) => (p.isNavBarMobileVisible ? 'flex' : 'none')};
    overflow-x: hidden;
  } */

  /* @media ${(p) => p.theme.breakpoints.smMaxH} {
    height: 100vh;
  } */
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

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
  color: ${(p) => p.theme.colors.primaryGrey};
  padding: 1rem;
  border-radius: 1rem;

  &:hover {
    box-shadow: ${(p) => p.theme.boxShadows.navBar};
  }

  &.active {
    color: ${({ to }) => (to === '#' ? '' : 'white')};
  }

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
    text-align: center;
    width: 100%;
    padding: 2rem;

    &:hover {
      box-shadow: none;
    }
  }
`;
