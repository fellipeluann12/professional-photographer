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
import { navBarItems } from '../assets/data/navBarItems';

export default function NavMenu() {
  const dropdownIsVisible = useSelector(
    (state) => state.ui.navBar.dropdownIsVisible
  );

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
    <NavBarMenuStyles>
      <Container>
        <NavBarContainer>
          <NavBarLogo>
            <NavBarLogoNavLink
              to="/"
              exact="true"
              role="button"
              onClick={toggleMobileNavBar}
            >
              KALEY
            </NavBarLogoNavLink>
          </NavBarLogo>
          <NavBarUl isNavBarMobileVisible={isNavBarMobileVisible}>
            {navBarItems.map((item, index) => {
              if (item.title === 'Projects') {
                return (
                  <NavBarLi
                    key={index}
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <NavBarNavLink to={item.path} onClick={onMouseEnterHandler}>
                      {item.title} <Caret />
                    </NavBarNavLink>
                    {dropdownIsVisible && <Dropdown />}
                  </NavBarLi>
                );
              } else {
                return (
                  <NavBarLi key={index}>
                    <NavBarNavLink to={item.path} onClick={toggleMobileNavBar}>
                      {item.title}
                    </NavBarNavLink>
                  </NavBarLi>
                );
              }
            })}
          </NavBarUl>
          <Burger />
        </NavBarContainer>
      </Container>
    </NavBarMenuStyles>
  );
}
