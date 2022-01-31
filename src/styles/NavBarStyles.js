import styled from 'styled-components';

export const NavMenuStyles = styled.div`
  background-color: ${(p) => p.theme.colors.primaryBlack};
  padding: 0.5rem 0;
  font-size: 2.3rem;
  font-family: ${(p) => p.theme.fonts.main};
  svg {
    fill: ${(p) => p.theme.colors.primaryGrey};
    width: 2rem;
    height: 2rem;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.primaryGrey};

    &:hover {
      box-shadow: ${(p) => p.theme.boxShadows.navBar};
    }
  }

  .active {
    color: white;

    svg {
      fill: white;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;

  a {
    font-family: ${(p) => p.theme.fonts.titles};
    font-weight: bold;
    background: #0acf6d;
    ${(p) => p.theme.colors.primaryGrey}
    background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;

  li {
    :not(:last-child) {
      margin-right: 3rem;
    }

    a {
      padding: 1rem;
      border-radius: 1rem;
    }
  }
`;

//   .nav-container {
//     display: flex;
//     justify-content: space-between;
//   }

//   .nav-main {
//     display: flex;
//   }
// `;
