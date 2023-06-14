import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Burger from './Burger';
import NavMobileLinks from './NavMobileLinks';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import Center from '../Center';

const SNav = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  position: sticky;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
  top: 0;
  z-index: 1000;
`;

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SMobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const SLeftSectionNav = styled.nav`
  font-size: 5rem;
`;

const SLeftSectionNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: bold;
  display: flex;
  align-items: center;
  background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SRightSectionNav = styled.nav`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.titles};
`;

export default function Nav({ title, navData, isMain }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const excludedPaths = ['/error', '/login'];

  const isNavBarMobileVisible = useSelector(
    (state) => state.ui.navBar.mobile.isVisible
  );

  const onLogoClickHandler = () => {
    if (isNavBarMobileVisible) {
      dispatch(uiActions.showNavBarMobile());
      dispatch(uiActions.toggleBurger());
    }
  };

  if (
    excludedPaths.some((path) => pathname.startsWith(path)) ||
    (isMain && pathname.startsWith('/dashboard'))
  ) {
    return null;
  }

  return (
    <SNav>
      <Center>
        <SContainer>
          <SLeftSectionNav>
            <SLeftSectionNavLink
              to={isMain ? '/' : '/dashboard'}
              onClick={onLogoClickHandler}
            >
              {title}
            </SLeftSectionNavLink>
          </SLeftSectionNav>
          <SRightSectionNav>
            <NavLinks navData={navData} />
          </SRightSectionNav>
          <Burger />
        </SContainer>
        {isNavBarMobileVisible && (
          <SMobileUl>
            {navData.map((item, index) => {
              return <NavMobileLinks item={item} key={index} />;
            })}
          </SMobileUl>
        )}
      </Center>
    </SNav>
  );
}
