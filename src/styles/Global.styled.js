import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  border-style: border-box;

}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: ${(p) => p.theme.fonts.main};
    height: 100%;
  }

  h1, h2, h3{
    font-family: ${(p) => p.theme.fonts.titles};
  }

  ul, li, a{
  list-style: none;
  text-decoration: none;
}
`;
