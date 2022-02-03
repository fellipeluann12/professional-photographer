import React from 'react';
import * as S from '../styles/Burger.styled';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function Burger() {
  const burgerIsClicked = useSelector(
    (state) => state.ui.navBar.mobile.burgerIsClicked
  );

  const dispatch = useDispatch();

  const isVisibleHandler = () => {
    dispatch(uiActions.showNavBarMobile(true));
    dispatch(uiActions.toggleBurger());
    return () => {};
  };

  return (
    <S.Wrapper onClick={isVisibleHandler} burgerIsClicked={burgerIsClicked}>
      <div />
      <div />
      <div />
    </S.Wrapper>
  );
}
