import React from 'react';
import { BurgerStyles } from '../styles/BurgerStyles';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function Burger() {
  const isBurgerClicked = useSelector(
    (state) => state.ui.navBar.mobile.isBurgerClicked
  );

  const dispatch = useDispatch();

  const isVisibleHandler = () => {
    dispatch(uiActions.NavBarMobileIsVisible());
    dispatch(uiActions.NavBarBurgerIsClicked());
  };

  return (
    <BurgerStyles onClick={isVisibleHandler} isBurgerClicked={isBurgerClicked}>
      <div />
      <div />
      <div />
    </BurgerStyles>
  );
}
