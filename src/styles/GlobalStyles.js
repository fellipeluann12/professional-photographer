import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  border-style: border-box;
}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(p) => p.theme.fonts.main};
  }

  ul, li, a{
  list-style: none;
  text-decoration: none;
}
`;

export default GlobalStyles;
