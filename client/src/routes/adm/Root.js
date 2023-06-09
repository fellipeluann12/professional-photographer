import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContextProvider } from '../../AuthContext';

const SApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SMain = styled.main`
  flex: 1 1;
`;

export const Root = () => {
  return (
    <SApp>
      <SMain>
        <AuthContextProvider>
          <Outlet />
        </AuthContextProvider>

        <NavLink to="projeto">Projetos</NavLink>
        <NavLink to="album">Albums</NavLink>
        <NavLink to="fotos">Fotos do Album</NavLink>
      </SMain>
    </SApp>
  );
};
