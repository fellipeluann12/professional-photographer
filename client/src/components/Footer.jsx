import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const SFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  padding: 2rem 0rem 2rem;
  text-align: center;
  font-size: 1vh;
  color: ${({ theme }) => theme.colors.primaryGrey};
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
`;

export default function Footer() {
  const { pathname } = useLocation();

  const excludedPaths = ['/error', '/login', '/dashboard'];

  if (
    excludedPaths.includes(pathname) ||
    excludedPaths.some((path) => pathname.startsWith(path))
  ) {
    return null;
  }

  return <SFooter>Copyright © 2022 - TODOS OS DIREITOS RESERVADOS</SFooter>;
}
