import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../styles/ContainerStyles';
import {
  NavContainer,
  NavLogo,
  NavMenuStyles,
  NavUl,
} from '../styles/NavMenuStyles';

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
              <NavLink to="/projects" exact="true" role="button">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact="true" role="button">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact="true" role="button">
                Contact
              </NavLink>
            </li>
          </NavUl>
        </NavContainer>
      </Container>
    </NavMenuStyles>
  );
}
