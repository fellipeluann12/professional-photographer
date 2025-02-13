import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { uiActions } from '../../store/ui-slice';
import Profile from '../Profile';
import { UserAuth } from '../../AuthContext';

const SLi = styled.li`
  display: none;

  svg {
    fill: ${({ theme }) => theme.colors.primaryGrey};
    height: 2rem;
    width: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lgMaxW} {
    display: flex;
  }

  @media (hover: none) {
    a:visited,
    a:active,
    a:link {
      margin-left: 0rem;
      border-right: none;
      box-shadow: none;
    }
  }
`;

const SNLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primaryGrey};
  font-size: 2.3rem;
  width: 100%;
  padding: 0.5rem;
  transition: all 0.2s linear;

  &:hover {
    margin-left: 1rem;
    border-right: 1rem solid #a1ed00;
  }
`;

const SNLinkSub = styled(NavLink)`
  font-size: 1.5rem;
  margin-left: 2.3rem;
  padding: 0.3rem;
  color: ${({ theme }) => theme.colors.primaryGrey};
`;

export default function NavMobileLinks({ item }) {
  const { logout } = UserAuth();
  const [subnav, setSubnav] = useState(false);

  const dispatch = useDispatch();

  const showSubnav = () => setSubnav(!subnav);

  const toggleMobileNavBarHandler = () => {
    dispatch(uiActions.showNavBarMobile());
    dispatch(uiActions.toggleBurger());
  };

  const handleLogout = async () => {
    try {
      await logout();
      toggleMobileNavBarHandler();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <SLi>
        <SNLink
          to={item.path}
          onClick={item.dropDown ? showSubnav : toggleMobileNavBarHandler}
        >
          {item.dropDown ? <Profile /> : item.title}
        </SNLink>
      </SLi>
      {subnav &&
        item.dropDown.map((item, index) => (
          <SLi key={index}>
            <SNLinkSub to={'#'} onClick={handleLogout}>
              - {item.title}
            </SNLinkSub>
          </SLi>
        ))}
    </>
  );
}
