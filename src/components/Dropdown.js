import React, { useEffect } from 'react';
import { projectItems } from '../assets/data/projectItems';
import {
  DropdownLi,
  DropdownNavLink,
  DropdownStyles,
} from '../styles/DropdownStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function Dropdown() {
  const dropDownIsVisible = useSelector(
    (state) => state.ui.navBar.dropDownIsVisible
  );

  const dispatch = useDispatch();

  const handleIsDropdownVisible = () => {
    dispatch(uiActions.NavBarDropDownIsVisible(false));
  };

  useEffect(() => {
    dispatch(uiActions.NavBarDropDownIsVisible(true));
  }, [dispatch, dropDownIsVisible]);

  return (
    <DropdownStyles DropDownIsVisible={dropDownIsVisible}>
      {projectItems.map((item, index) => {
        return (
          <DropdownLi key={index}>
            <DropdownNavLink to={item.path} onClick={handleIsDropdownVisible}>
              {item.title}
            </DropdownNavLink>
          </DropdownLi>
        );
      })}
    </DropdownStyles>
  );
}
