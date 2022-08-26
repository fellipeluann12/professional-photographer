import React from 'react';
import styled from 'styled-components';

const SPText = styled.span`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.2rem')};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  display: inline-block;
  text-align: ${(props) => (props.textAlign ? props.textAlign : '')};
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
    >
      {props.children}
    </SPText>
  );
}
