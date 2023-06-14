import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Dashboard from '../../components/adm/dashboard-page/Dashboard';

export const Root = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};
