import React from 'react';
import styled from 'styled-components';

const SPText = styled.span`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : 'clamp(1rem, 0.5vw, 2rem)'};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  text-align: center;
`;

export default function PText(props) {
  return (
    <SPText
      style={props.style}
      maxWidth={props.maxWidth}
      color={props.color}
      fontSize={props.fontSize}
      letterSpacing={props.letterSpacing}
    >
      {props.children}
    </SPText>
  );
}
