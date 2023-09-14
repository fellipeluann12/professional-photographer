import React from 'react';
import styled from 'styled-components';
import PText from '../../components/PText';

const SError = styled.div`
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  width: 100%;
`;

const SH1 = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.gradientGreen.word};
  display: inline-block;
  padding-bottom: 3rem;
`;

export const Error = () => {
  return (
    <SError>
      <SH1>Oops!</SH1>
      <PText color="primaryGrey">Sorry, this page doesn't exist.</PText>
    </SError>
  );
};
