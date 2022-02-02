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
  const isDropdownVisible = useSelector(
    (state) => state.ui.navBar.isDropdownVisible
  );

  const isNavBarMobileVisible = useSelector(
    (state) => state.ui.navBar.mobile.isVisible
  );

  const dispatch = useDispatch();

  const toggleMobileHandler = () => {
    dispatch(uiActions.navBarMobileIsVisible());
    dispatch(uiActions.navBarBurgerIsClicked());
  };

  const onMouseEnterHandler = () => {
    dispatch(uiActions.navBarDropDownIsVisible(true));
  };

  const onMouseLeaveHandler = () => {
    dispatch(uiActions.navBarDropDownIsVisible(false));
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
              onClick={toggleMobileHandler}
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
                    <NavBarNavLink to={item.path}>
                      {item.title} <Caret />
                    </NavBarNavLink>
                    {isDropdownVisible && <Dropdown />}
                  </NavBarLi>
                );
              } else {
                return (
                  <NavBarLi key={index}>
                    <NavBarNavLink to={item.path} onClick={toggleMobileHandler}>
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
