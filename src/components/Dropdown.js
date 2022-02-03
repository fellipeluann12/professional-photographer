import React, { useEffect } from 'react';
import { navBarItems } from '../assets/data/navBarItems';
import {
  DropdownLi,
  DropdownNavLink,
  DropdownStyles,
  DropdownSpan,
  DropdownSpanContainer,
  DropdownUl,
} from '../styles/DropdownStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function Dropdown() {
  const dropdownIsVisible = useSelector(
    (state) => state.ui.navBar.dropdownIsVisible
  );

  const navBarMobileIsVisible = useSelector(
    (state) => state.ui.navBar.mobile.isVisible
  );

  console.log(dropdownIsVisible);

  const dispatch = useDispatch();

  const dropdownIsVisibleHandler = () => {
    if (navBarMobileIsVisible) {
      dispatch(uiActions.showNavBarDropdown());
      dispatch(uiActions.toggleBurger());
      dispatch(uiActions.showNavBarMobile());
    }

    dispatch(uiActions.showNavBarDropdown());
  };

  const closeDropdownMobile = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  useEffect(() => {
    if (dropdownIsVisible) {
      //dispatch(uiActions.showNavBarDropdown());
      console.log('drop down visible?', 'rodou');
    }
    return () => {};
  }, [dispatch, dropdownIsVisible]);

  return (
    <DropdownStyles dropdownIsVisible={dropdownIsVisible}>
      <DropdownSpanContainer>
        <DropdownSpan onClick={closeDropdownMobile}>x</DropdownSpan>
      </DropdownSpanContainer>
      <DropdownUl>
        {navBarItems[1].dropdown.map((item, index) => {
          return (
            <DropdownLi key={index}>
              <DropdownNavLink
                to={item.path}
                onClick={dropdownIsVisibleHandler}
              >
                {item.title}
              </DropdownNavLink>
            </DropdownLi>
          );
        })}
      </DropdownUl>
    </DropdownStyles>
  );
}
