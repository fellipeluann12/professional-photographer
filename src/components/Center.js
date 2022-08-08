import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export default function Center(props) {
  return <Container>{props.children}</Container>;
}
