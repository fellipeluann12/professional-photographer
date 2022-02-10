import React from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Li = styled.li`
  display: flex;
  height: 5rem;
`;

const Nlink = styled(NavLink)`
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

export default function Dropdown({ item }) {
  const dispatch = useDispatch();

  const dropDownIsVisibleHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  return (
    <>
      {item.dropDown.map((item, index) => {
        return (
          <Li key={index}>
            <Nlink to={item.path} onClick={dropDownIsVisibleHandler}>
              {item.title}
            </Nlink>
          </Li>
        );
      })}
    </>
  );
}
