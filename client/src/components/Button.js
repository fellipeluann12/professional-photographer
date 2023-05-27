import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.titles};
  background: ${({ theme }) => theme.colors.primaryBlack};
  border: 1px solid ${({ theme }) => theme.colors.primaryGreen};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  padding: 0.7rem 1rem;
  display: inline-block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGrey};
  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover {
    opacity: 0.9;
  }

  ${(props) =>
    props.primary === true &&
    css`
      background: ${({ theme }) => theme.colors.primaryGreen};
      color: ${({ theme }) => theme.colors.secondaryBlack};
    `}
`;

export default function Button(props) {
  if (props.nLink) {
    return (
      <NavLink to={props.nLink}>
        <SButton primary={props.primary}>{props.btnText}</SButton>
      </NavLink>
    );
  }
  return (
    <SButton primary={props.primary} width={props.width} type={props.type}>
      {props.btnText}
    </SButton>
  );
}
