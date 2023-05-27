import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  border-style: border-box;
  box-sizing: border-box;
}

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow: visible;
  }

  body {
    font-family: ${(p) => p.theme.fonts.main};
    height: 100%;
    width: 100%;
  }

  h1, h2, h3{
    font-family: ${(p) => p.theme.fonts.titles};
  }

  h1, h2, h3{
    font-family: ${(p) => p.theme.fonts.titles};
  }

  ul, li, a{
  list-style: none;
  text-decoration: none;
}

.toast-message{
  font-size: 1.6rem;
}
`;
