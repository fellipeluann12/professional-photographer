import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 80px;
  background-color: ${(p) => p.theme.colors.primaryBlack};
  opacity: 1.9;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 2.3rem;
  font-family: ${(p) => p.theme.fonts.main};

  svg {
    fill: ${(p) => p.theme.colors.primaryGrey};
    width: 2rem;
    height: 2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;
  height: 100%;
`;

export const LogoNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
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
