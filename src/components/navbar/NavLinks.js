import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';
import Dropdown from './DropDownLinks';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { navData } from '../../assets/data/nav-data';

const Ul = styled.ul`
  display: flex;

  svg {
    fill: ${(p) => p.theme.colors.primaryGrey};
    width: 2rem;
    height: 2rem;
  }

  @media ${(p) => p.theme.breakpoints.lgMaxW} {
    display: none;
  }

  @media (hover: none) {
    a:visited,
    a:active,
    a:link {
      box-shadow: none;
    }
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-right: 3rem;
  }
`;

const NLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.primaryGrey};
  border-radius: 1rem;
  font-size: 2.5rem;
  padding: 0.7rem;

  &:hover {
    box-shadow: ${(p) => p.theme.boxShadows.navBar};
  }

  &.active {
    color: ${({ to }) => (to === '#' ? '' : 'white')};
  }
`;

const DropDownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 8rem;
  background: ${(p) => p.theme.colors.primaryBlack};
  width: 16.42rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 20;
`;

const DropDownUl = styled.ul`
  padding: 1rem;
`;

export default function NavLinks(props) {
  const dispatch = useDispatch();

  const dropDownIsVisible = useSelector(
    (state) => state.ui.navBar.dropDownIsVisible
  );

  const toggleDropDownHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  return (
    <Ul>
      {navData.map((item, index) => {
        if (item.dropDown) {
          return (
            <Li
              key={index}
              onMouseEnter={toggleDropDownHandler}
              onMouseLeave={toggleDropDownHandler}
            >
              <NLink to={item.path}>
                {item.title} <Caret />
              </NLink>
              {dropDownIsVisible && (
                <DropDownWrapper>
                  <DropDownUl>
                    <Dropdown item={item} />
                  </DropDownUl>
                </DropDownWrapper>
              )}
            </Li>
          );
        } else {
          return (
            <Li key={index}>
              <NLink to={item.path}>{item.title}</NLink>
            </Li>
          );
        }
      })}
    </Ul>
  );
}
