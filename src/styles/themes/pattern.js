export const pattern = {
  // Padronização de fontes
  fonts: {
    main: 'Roboto Mono, monospace',
    titles: 'Montserrat, sans-serif',
  },
  // Cores para o layout
  colors: {
    primaryBlack: '#1A1A1A',
    secondaryBlack: 'rgb(36, 36, 36)',
    primaryGreen: '#0acf6d',
    secondaryGreen: '#c9cf7a',
    primaryGrey: '#bcb4b4',
    secondaryGrey: '#403f3f',
    gradientGreen: 'linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%)',
    boxShadowGreen: '#a1ed00',
    boxShadowGrey: '#dbdce0',
  },
  gradientGreen: {
    word: `background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%); 
    background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`,
    background: `
    background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%); 
    background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    `,
  },
  boxShadows: {
    navBar: '0px 15px 19px -15px #a1ed00',
    Card: '20px 20px 7px -10px #dbdce0',
  },
  breakpoints: {
    smMaxW: 'screen and (max-width: 640px)',
    mdMaxW: 'screen and (max-width: 768px)',
    lgMaxW: 'screen and (max-width: 1024px)',
    lgMinW: 'screen and (min-width: 1024px)',
    smMaxH: 'screen and (max-height: 400px)',
  },
};
