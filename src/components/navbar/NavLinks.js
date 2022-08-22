import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { navData } from '../../assets/data/nav-data';
import Dropdown from './DropDown';

const SUl = styled.ul`
  display: flex;

  svg {
    fill: ${({ theme }) => theme.colors.primaryGrey};
    width: 2rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lgMaxW} {
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

const SLi = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-right: 3rem;
  }
`;

const SNLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 1rem;
  font-size: 2.5rem;
  padding: 0.7rem;

  &:hover {
    box-shadow: 0px 15px 19px -15px #a1ed00;
  }

  &.active {
    color: ${({ to }) => (to === '#' ? '' : 'white')};
  }
`;

const SDropDown = styled.div`
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

const SDropDownUl = styled.ul`
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
    <SUl>
      {navData.map((item, index) => {
        if (item.dropDown) {
          return (
            <SLi
              key={index}
              onMouseEnter={toggleDropDownHandler}
              onMouseLeave={toggleDropDownHandler}
            >
              <SNLink to={item.path}>
                {item.title} <Caret />
              </SNLink>
              {dropDownIsVisible && (
                <SDropDown>
                  <SDropDownUl>
                    <Dropdown item={item} />
                  </SDropDownUl>
                </SDropDown>
              )}
            </SLi>
          );
        } else {
          return (
            <SLi key={index}>
              <SNLink to={item.path}>{item.title}</SNLink>
            </SLi>
          );
        }
      })}
    </SUl>
  );
}
