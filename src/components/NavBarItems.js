import React from 'react';
import * as S from '../styles/NavBar/NavBarItems.styled';
import { ReactComponent as Caret } from '../assets/svgs/caret.svg';
import ProjectsItems from './ProjectsItems.js';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function NavBarItems() {
  const dispatch = useDispatch();

  const dropDownIsVisible = useSelector(
    (state) => state.ui.navBar.dropDownIsVisible
  );

  const toggleDropDownHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  return (
    <S.Wrapper>
      <S.Ul>
        <S.Li>
          <S.NLink to="/" exact="true" role="button" onClick={''}>
            Home
          </S.NLink>
        </S.Li>
        <S.Li
          onMouseEnter={toggleDropDownHandler}
          onMouseLeave={toggleDropDownHandler}
        >
          <S.NLink to="#" role="button" onClick={''}>
            Projects <Caret />
          </S.NLink>
          {dropDownIsVisible && <ProjectsItems />}
        </S.Li>
        <S.Li>
          <S.NLink to="/about" role="button" onClick={''}>
            About
          </S.NLink>
        </S.Li>
        <S.Li>
          <S.NLink to="/contact" role="button" onClick={''}>
            Contact
          </S.NLink>
        </S.Li>
      </S.Ul>
    </S.Wrapper>
  );
}
