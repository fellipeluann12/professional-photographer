import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../styles/ContainerStyles';
import {
  NavContainer,
  NavLogo,
  NavMenuStyles,
  NavUl,
} from '../styles/NavBarStyles';
import Dropdown from './Dropdown';
import { ReactComponent as Caret } from '../assets/svgs/caret.svg';
import Burger from './Burger';

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <Container>
        <NavContainer>
          <NavLogo>
            <NavLink to="/" exact="true" role="button">
              KALEY
            </NavLink>
          </NavLogo>
          <NavUl>
            <li>
              <NavLink to="/projects" role="button">
                Projects <Caret />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" role="button">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" role="button">
                Contact
              </NavLink>
            </li>
          </NavUl>
          <Burger />
        </NavContainer>
      </Container>
    </NavMenuStyles>
  );
}
