import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Burger from './Burger';
import NavMobileLinks from './NavMobileLinks';
import { useSelector } from 'react-redux';
import { navData } from '../assets/data/nav-data';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Header = styled.header`
  min-height: 8rem;
  background-color: ${(p) => p.theme.colors.primaryBlack};
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  line-height: 1.6;
  justify-content: space-between;
`;

const MobileContainer = styled.nav`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const MobileWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const LeftSection = styled.div`
  font-size: 5rem;
`;

const LeftSectionNavLink = styled(NavLink)`
  font-family: ${(p) => p.theme.fonts.titles};
  font-weight: bold;
  display: flex;
  align-items: center;
  ${(p) => p.theme.colors.primaryGrey}
  background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RightSection = styled.nav`
  display: flex;
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
    <Header>
      <Container>
        <LeftSection>
          <LeftSectionNavLink to="/" exact="true" onClick={onLogoClickHandler}>
            KALEY
          </LeftSectionNavLink>
        </LeftSection>
        <RightSection>
          <NavLinks />
        </RightSection>
        <Burger />
      </Container>
      {isNavBarMobileVisible && (
        <MobileContainer>
          <MobileWrapper>
            {isNavBarMobileVisible &&
              navData.map((item, index) => {
                return <NavMobileLinks item={item} key={index} />;
              })}
          </MobileWrapper>
        </MobileContainer>
      )}
    </Header>
  );
}
