import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');

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

  ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
