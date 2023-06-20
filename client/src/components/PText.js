import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const SPText = styled.p`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  display: inline-block;
  text-align: ${(props) => (props.textAlign ? props.textAlign : '')};
  max-width: 100%;

  ${(props) =>
    props.error === true &&
    css`
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.primaryRed};
      margin-left: 1rem;

      &:before {
        display: inline;
        content: '⚠ ';
      }
    `}
`;

export default function PText(props) {
  return (
    <SPText
      style={props.style}
      maxWidth={props.maxWidth}
      color={props.color}
      fontSize={props.fontSize}
      letterSpacing={props.letterSpacing}
      textAlign={props.textAlign}
      error={props.error}
    >
      {props.children}
    </SPText>
  );
}
