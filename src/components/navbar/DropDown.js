import React from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SLi = styled.li`
  display: flex;
  height: 5rem;
  transition: all 0.2s linear;
`;

const SNlink = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryGrey};
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

  const dropDownVisibleHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  return (
    <>
      {item.dropDown.map((item, index) => {
        return (
          <SLi key={index}>
            <SNlink to={item.path} onClick={dropDownVisibleHandler}>
              {item.title}
            </SNlink>
          </SLi>
        );
      })}
    </>
  );
}
