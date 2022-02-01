import { Container } from '../styles/ContainerStyles';
import {
  NavBarContainer,
  NavBarLogo,
  NavBarMenuStyles,
  NavBarUl,
  NavBarNavLink,
  NavBarLogoNavLink,
  NavBarLi,
} from '../styles/NavBarStyles';
import Dropdown from './Dropdown';
import { ReactComponent as Caret } from '../assets/svgs/caret.svg';
import Burger from './Burger';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export default function NavMenu() {
  const isDropdownVisible = useSelector(
    (state) => state.ui.navBar.isDropdownVisible
  );

  const navBarMobileIsVisible = useSelector(
    (state) => state.ui.navBar.mobile.isVisible
  );

  const dispatch = useDispatch();

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      dispatch(uiActions.NavBarDropDownIsVisible(false));
    } else {
      dispatch(uiActions.NavBarDropDownIsVisible(true));
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      dispatch(uiActions.NavBarDropDownIsVisible(false));
    } else {
      dispatch(uiActions.NavBarDropDownIsVisible(false));
    }
  };

  return (
    <NavBarMenuStyles>
      <Container>
        <NavBarContainer>
          <NavBarLogo>
            <NavBarLogoNavLink to="/" exact="true" role="button">
              KALEY
            </NavBarLogoNavLink>
          </NavBarLogo>
          <NavBarUl isMobile={navBarMobileIsVisible}>
            <NavBarLi>
              <NavBarNavLink to="/" role="button">
                Home
              </NavBarNavLink>
            </NavBarLi>
            <NavBarLi onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavBarNavLink to="#" role="button" isproject="true">
                Projects <Caret />
              </NavBarNavLink>
              {isDropdownVisible && <Dropdown />}
            </NavBarLi>
            <NavBarLi>
              <NavBarNavLink to="/about" role="button">
                About
              </NavBarNavLink>
            </NavBarLi>
            <NavBarLi>
              <NavBarNavLink to="/contact" role="button">
                Contact
              </NavBarNavLink>
            </NavBarLi>
          </NavBarUl>
          <Burger />
        </NavBarContainer>
      </Container>
    </NavBarMenuStyles>
  );
}
