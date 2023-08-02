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

const SCheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SCheckboxInput = styled.input`
  ${SBaseInput}
  width: 3rem;
  height: 3rem;
`;

const SelectContainer = styled.div`
  position: relative;
  width: auto;

  .select_arrow {
    position: absolute;
    top: 20px;
    right: 15px;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: ${(props) =>
        props.errors[props.name]
          ? props.theme.colors.primaryRed
          : props.theme.colors.primaryGreen}
      transparent transparent transparent;
  }
`;

const SSelect = styled.select`
  ${SBaseInput}
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primaryGrey};
    background: ${(props) => props.theme.colors.secondaryBlack};
  }

  &::-ms-expand {
    display: none;
  }
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
  const { options, errors, register, value, onChange, name } = input;
  const errorMessage = (
    <ErrorMessage
      errors={input.errors || errors}
      name={input.name || name}
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
  );

  if (input.comboBox) {
    return (
      <>
        <SelectContainer
          name={name}
          {...(errors ? { errors: errors } : { errors: '' })}
        >
          <SSelect
            {...(errors ? { errors: errors } : { errors: '' })}
            value={value}
            {...(register
              ? register(name, { required: 'This input is required.' })
              : {})}
            onChange={onChange}
          >
            <option disabled={true} value="">
              SELECT AN OPTION
            </option>
            {options.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </SSelect>
          <div className="select_arrow"></div>
          {register ? errorMessage : ''}
        </SelectContainer>
      </>
    );
  }

  if (input.textArea) {
    return (
      <>
        <STextArea {...input}></STextArea>
        {errorMessage}
      </>
    );
  }

  if (input.type === 'checkbox') {
    return (
      <SCheckboxContainer>
        <SCheckboxInput type="checkbox" {...input} />
        <PText color="primaryGrey" fontSize="2rem">
          is Featured?
        </PText>
      </SCheckboxContainer>
    );
  }

  if (input.type === 'file') {
    <>
      <SInput {...input} />
      {errorMessage}
    </>;
  }

  return (
    <>
      <SInput {...input} />
      {errorMessage}
    </>
  );
};

export default Input;
