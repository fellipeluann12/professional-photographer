import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SButton = styled.button`
  background-color: ${(props) =>
    props.config === 'primary'
      ? props.theme.colors.primaryGreen
      : props.config === 'close'
      ? props.theme.colors.primaryRed
      : 'transparent'};
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.titles};
  border: 1px solid
    ${(props) =>
      props.config === 'primary'
        ? props.theme.colors.primaryGreen
        : props.config === 'close'
        ? props.theme.colors.primaryRed
        : props.theme.colors.primaryGreen};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  padding: 0.7rem 1rem;
  display: inline-block;
  font-weight: 600;
  color: ${(props) =>
    props.config === 'primary'
      ? props.theme.colors.primaryBlack
      : props.config === 'close'
      ? props.theme.colors.primaryBlack
      : props.theme.colors.primaryGrey};
  width: ${(props) => props.width || 'auto'};

  &:hover {
    opacity: 0.9;
  }
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
    <SButton
      primary={props.primary}
      close={props.close}
      width={props.width}
      type={props.type}
      config={props.config}
      onClick={props.onClick}
    >
      {props.btnText}
    </SButton>
  );
}
