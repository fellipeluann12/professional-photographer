import styled from 'styled-components';

export const NavMenuStyles = styled.div`
  background-color: #17171a;
  padding: 0.8rem 0;
  font-size: 2.3rem;
  font-family: ${(p) => p.theme.fonts.main};

  a {
    text-decoration: none;
    color: #bcb4b4;

    &:hover {
      box-shadow: 7px 9px 15px -6px #a1ed00;
    }
  }

  .active {
    color: white;
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
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;

  li {
    :not(:last-child) {
      margin-right: 4rem;
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
