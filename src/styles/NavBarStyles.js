import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarMenuStyles = styled.div`
  height: 80px;
  background-color: ${(p) => p.theme.colors.primaryBlack};
  opacity: 1.9;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  font-size: 2.3rem;
  font-family: ${(p) => p.theme.fonts.main};

  svg {
    fill: ${(p) => p.theme.colors.primaryGrey};
    width: 2rem;
    height: 2rem;
  }
`;

export const NavBarLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;
  height: 100%;
`;

export const NavBarLogoNavLink = styled(NavLink)`
  font-family: ${(p) => p.theme.fonts.titles};
  font-weight: bold;
  ${(p) => p.theme.colors.primaryGrey}
  background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavBarUl = styled.ul`
  display: flex;

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
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
  }

  @media ${(p) => p.theme.breakpoints.smMaxH} {
    height: 100vh;
  }
`;

export const NavBarLi = styled.li`
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

export const NavBarNavLink = styled(NavLink)`
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
