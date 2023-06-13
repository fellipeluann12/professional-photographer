import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContextProvider } from '../../AuthContext';
import Dashboard from '../../components/adm/dashboard-page/Dashboard';
import ProtectedRoute from '../../components/adm/dashboard-page/ProtectedRoute';

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
        <Routes>
          <Route
            path="/lol"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Outlet />
        <NavLink to="projeto">Projetos</NavLink>
        <NavLink to="album">Albums</NavLink>
        <NavLink to="fotos">Fotos do Album</NavLink>
      </SMain>
    </SApp>
  );
};
