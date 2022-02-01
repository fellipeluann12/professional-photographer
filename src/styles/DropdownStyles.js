import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DropdownStyles = styled.ul`
  position: absolute;
  top: 8rem;
  background: ${(p) => p.theme.colors.primaryBlack};
  width: 16.42rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: start;
  display: ${(props) => (props.isDropdownVisible ? 'block' : 'none')};
`;

export const DropdownLi = styled.li`
  display: flex;
`;

export const DropdownNavLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.primaryGrey};
  width: 100%;
  padding: 1rem;
  font-size: 1.7rem;

  &.active {
    color: white;
  }
`;
