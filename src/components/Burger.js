import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import styled from 'styled-components';

const Wrapper = styled.div`
  top: 1.8rem;
  right: 2rem;
  z-index: 20;
  width: 4rem;
  height: 4rem;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    justify-items: center;
    align-self: center;
  }

  div {
    width: 4rem;
    height: 0.5rem;
    background-color: white;
    border-radius: 1rem;
    transform-origin: 0.1rem;
    transition: all 0.3s ease-in;

    &:nth-child(1) {
      transform: ${(props) =>
        props.burgerIsClicked ? 'rotate(45deg)' : 'translateX(0)'};
    }
    &:nth-child(2) {
      opacity: ${(props) => (props.burgerIsClicked ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.burgerIsClicked ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const DefaultDiv = styled.div`
  width: 4rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 1rem;
  transform-origin: 0.1rem;
  transition: all 0.3s ease-in;
`;

const FirstRow = styled(DefaultDiv)`
  transform: ${(props) =>
    props.burgerIsClicked ? 'rotate(45deg)' : 'translateX(0)'};
`;

const SecondRow = styled(DefaultDiv)`
  opacity: ${(props) => (props.burgerIsClicked ? 0 : 1)};
`;

const ThirdRow = styled(DefaultDiv)`
  transform: ${(props) =>
    props.burgerIsClicked ? 'rotate(-45deg)' : 'rotate(0)'};
`;

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
    <Wrapper onClick={isVisibleHandler} burgerIsClicked={burgerIsClicked}>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </Wrapper>
  );
}
