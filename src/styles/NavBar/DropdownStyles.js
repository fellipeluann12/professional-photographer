import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DropdownStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 8rem;
  background: ${(p) => p.theme.colors.primaryBlack};
  width: 16.42rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 20;

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
    bottom: 0;
    left: 0;
    top: 0;
    visibility: hidden;
    width: 80vw;
  }
`;

export const DropdownUl = styled.ul`
  padding: 1rem;
`;

export const DropdownSpanContainer = styled.div`
  display: none;

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
    display: flex;
    justify-content: right;
    padding: 1rem;
  }
`;

export const DropdownSpan = styled.span`
  color: white;
  cursor: pointer;
`;

export const DropdownLi = styled.li`
  display: flex;
  height: 5rem;
`;

export const DropdownNavLink = styled(NavLink)`
  display: flex;
  color: ${(p) => p.theme.colors.primaryGrey};
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  align-items: center;

  &.active {
    color: white;
  }
`;
