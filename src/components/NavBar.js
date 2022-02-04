import { Container } from '../styles/Container.styled';
import * as S from '../styles/NavBar/NavBar.styled';
import Dropdown from './Dropdown';
import { ReactComponent as Caret } from '../assets/svgs/caret.svg';
import Burger from './Burger';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { navBarItems } from '../assets/data/navBarItems';
import NavBarItems from './NavBarItems';

export default function NavMenu() {
  const isNavBarMobileVisible = useSelector(
    (state) => state.ui.navBar.mobile.isVisible
  );

  const dispatch = useDispatch();

  const toggleMobileNavBar = () => {
    if (!isNavBarMobileVisible) {
      return;
    }
    dispatch(uiActions.showNavBarMobile());
    dispatch(uiActions.toggleBurger());
  };

  const onMouseEnterHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  const onMouseLeaveHandler = () => {
    dispatch(uiActions.showNavBarDropdown());
  };

  return (
    <S.Wrapper>
      <Container>
        <S.NavBarContainer>
          <S.Logo>
            <S.LogoNavLink
              to="/"
              exact="true"
              role="button"
              onClick={toggleMobileNavBar}
            >
              KALEY
            </S.LogoNavLink>
          </S.Logo>
          <NavBarItems />
          <Burger />
        </S.NavBarContainer>
      </Container>
    </S.Wrapper>
  );
}
