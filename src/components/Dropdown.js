import React, { useEffect } from 'react';
import { projectItems } from '../assets/data/navBarItems';
import {
  DropdownLi,
  DropdownNavLink,
  DropdownStyles,
} from '../styles/DropdownStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function Dropdown() {
  const isDropdownVisible = useSelector(
    (state) => state.ui.navBar.isDropdownVisible
  );

  const dispatch = useDispatch();

  const isDropdownVisibleHandler = () => {
    dispatch(uiActions.NavBarDropDownIsVisible(false));
  };

  useEffect(() => {
    dispatch(uiActions.NavBarDropDownIsVisible(true));
  }, [dispatch, isDropdownVisible]);

  return (
    <DropdownStyles isDropdownVisible={isDropdownVisible}>
      {projectItems.map((item, index) => {
        return (
          <DropdownLi key={index}>
            <DropdownNavLink to={item.path} onClick={isDropdownVisibleHandler}>
              {item.title}
            </DropdownNavLink>
          </DropdownLi>
        );
      })}
    </DropdownStyles>
  );
}
