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

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
