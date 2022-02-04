import React from 'react';
import * as S from '../styles/NavBar/NavBarItems.styled';
import { ReactComponent as Caret } from '../assets/svgs/caret.svg';

export default function NavBarItems() {
  return (
    <S.Wrapper>
      <S.Ul>
        <S.Li>
          <S.NLink to="/" exact="true" role="button" onClick={''}>
            Home
          </S.NLink>
        </S.Li>
        <S.Li>
          <S.NLink to="#" role="button" onClick={''}>
            Projects <Caret />
          </S.NLink>
        </S.Li>
        {/* <S.Ul>
        <S.Li>
          <S.NLink to="#" role="button" onClick={''}>
            Live Projects
          </S.NLink>
        </S.Li>
      </S.Ul> */}
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
