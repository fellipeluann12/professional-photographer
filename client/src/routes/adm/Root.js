import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Outlet />
      <NavLink to="projeto">Projetos</NavLink>
      <NavLink to="album">Albums</NavLink>
      <NavLink to="fotos">Fotos do Album</NavLink>
    </>
  );
};
