import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const SError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  width: 100%;
`;

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <SError>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </SError>
  );
};
