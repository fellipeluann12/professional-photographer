import React from 'react';
import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  padding: 2rem 0rem 2rem;
  text-align: center;
  font-size: 1vh;
  color: ${({ theme }) => theme.colors.primaryGrey};
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

export default function Footer() {
  return <SFooter>Copyright © 2022 - TODOS OS DIREITOS RESERVADOS</SFooter>;
}
