import React from 'react';
import * as S from '../styles/NavBar/ProjectsItems.styled';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function ProjectsItems() {
  const dispatch = useDispatch();

  const onMouseClickHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  return (
    <S.Wrapper>
      <S.Li>
        <S.NLink to="/livemusic" role="button" onClick={onMouseClickHandler}>
          Live music
        </S.NLink>
      </S.Li>
      <S.Li>
        <S.NLink to="/personal" role="button" onClick={onMouseClickHandler}>
          Personal
        </S.NLink>
      </S.Li>
      <S.Li>
        <S.NLink to="/events" role="button" onClick={onMouseClickHandler}>
          Events
        </S.NLink>
      </S.Li>
    </S.Wrapper>
  );
}
