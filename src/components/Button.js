import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SButton = styled.button`
  background-color: transparent;
  border: none;

  ${(props) =>
    props.primary === true &&
    css`
      font-family: ${({ theme }) => theme.fonts.titles};
      background: ${({ theme }) => theme.colors.primaryGreen};
      border: 1px solid transparent;
      border-radius: 0.5rem;

      &:hover {
        opacity: 0.9;
      }
    `}
`;

const SNLink = styled(NavLink)`
  font-size: 1.6rem;
  padding: 0.7em 2em;
  display: inline-block;
  font-weight: 600;
  color: white;
`;

export default function Button(props) {
  return (
    <SButton primary={props.primary}>
      <SNLink to="#">{props.btnText}</SNLink>
    </SButton>
  );
}
