import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Burger from './Burger';
import NavMobileLinks from './NavMobileLinks';
import { useSelector } from 'react-redux';
import { navData } from '../../assets/data/nav-data';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import Center from '../Center';

const SNav = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGrey};
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

export default function Nav() {
  const dispatch = useDispatch();

  const isNavBarMobileVisible = useSelector(
    (state) => state.ui.navBar.mobile.isVisible
  );

  const onLogoClickHandler = () => {
    if (isNavBarMobileVisible) {
      dispatch(uiActions.showNavBarMobile());
      dispatch(uiActions.toggleBurger());
    }
  };

  return (
    <SNav>
      <Center>
        <SContainer>
          <SLeftSectionNav>
            <SLeftSectionNavLink
              to="/"
              exact="true"
              onClick={onLogoClickHandler}
            >
              KALEY
            </SLeftSectionNavLink>
          </SLeftSectionNav>
          <SRightSectionNav>
            <NavLinks />
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
