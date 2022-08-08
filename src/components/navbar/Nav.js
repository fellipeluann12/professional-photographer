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

const Wrapper = styled.header`
  min-height: 8rem;
  background-color: ${(p) => p.theme.colors.primaryBlack};
  position: sticky;
  top: 0;
`;

const Container = styled.div`
  line-height: 1.6;
  display: flex;
  justify-content: space-between;
`;

const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const LeftSectionNav = styled.nav`
  font-size: 5rem;
`;

const LeftSectionNavLink = styled(NavLink)`
  font-family: ${(p) => p.theme.fonts.titles};
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

const RightSectionNav = styled.nav`
  display: flex;
  font-family: ${(p) => p.theme.fonts.titles};
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
    <Wrapper>
      <Center>
        <Container>
          <LeftSectionNav>
            <LeftSectionNavLink
              to="/"
              exact="true"
              onClick={onLogoClickHandler}
            >
              KALEY
            </LeftSectionNavLink>
          </LeftSectionNav>
          <RightSectionNav>
            <NavLinks />
          </RightSectionNav>
          <Burger />
        </Container>
        {isNavBarMobileVisible && (
          <MobileUl>
            {navData.map((item, index) => {
              return <NavMobileLinks item={item} key={index} />;
            })}
          </MobileUl>
        )}
      </Center>
    </Wrapper>
  );
}
