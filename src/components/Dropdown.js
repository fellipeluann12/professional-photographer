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
  const isDropdownVisible = useSelector(
    (state) => state.ui.navBar.isDropdownVisible
  );

  const dispatch = useDispatch();

  const isDropdownVisibleHandler = () => {
    dispatch(uiActions.navBarDropDownIsVisible(false));
  };

  useEffect(() => {
    dispatch(uiActions.navBarDropDownIsVisible(true));
  }, [dispatch, isDropdownVisible]);

  return (
    <DropdownStyles isDropdownVisible={isDropdownVisible}>
      <DropdownSpanContainer>
        <DropdownSpan>x</DropdownSpan>
      </DropdownSpanContainer>
      <DropdownUl>
        {navBarItems[1].dropdown.map((item, index) => {
          return (
            <DropdownLi key={index}>
              <DropdownNavLink
                to={item.path}
                onClick={isDropdownVisibleHandler}
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
