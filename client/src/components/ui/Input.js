import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import PText from '../PText';
import { ErrorMessage } from '@hookform/error-message';

const SBaseInput = css`
  padding: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryGrey};
  background-color: transparent;
  border-radius: 0.5rem;
  border: 2px solid
    ${(props) =>
      props.errors[props.name]
        ? props.theme.colors.primaryRed
        : props.theme.colors.primaryGreen};
  outline: 0;
  line-height: 2.2rem;
  width: 100%;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.main};

  &:focus {
  }
`;

const SInput = styled.input`
  ${SBaseInput}
`;

const STextArea = styled.textarea`
  ${SBaseInput}
  resize: vertical;
  height: 15rem;
  line-height: 150%;
  width: 100%;
  transition: all 0.3s;
`;

const Input = ({ input }) => {
  if (input.textArea) {
    return (
      <>
        <STextArea {...input}></STextArea>
        <ErrorMessage
          errors={input.errors}
          name={input.name}
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <PText error key={type}>
                    {message}
                  </PText>
                ))
              : null;
          }}
        />
      </>
    );
  }

  return (
    <>
      <SInput {...input} />
      <ErrorMessage
        errors={input.errors}
        name={input.name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <PText error key={type}>
                  {message}
                </PText>
              ))
            : null;
        }}
      />
    </>
  );
};

export default Input;
