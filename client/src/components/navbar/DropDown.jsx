import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../../AuthContext';

const SLi = styled.li`
  display: flex;
  height: 3.5rem;
  transition: all 0.2s linear;
`;

const SNlink = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryGrey};
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  align-items: center;
`;

export default function DropDown() {
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <SLi>
      <SNlink to={'#'} onClick={handleLogout}>
        Logout
      </SNlink>
    </SLi>
  );
}
