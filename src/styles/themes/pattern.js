export const pattern = {
  // Padronização de fontes
  fonts: {
    main: 'Roboto Mono, monospace',
    titles: 'Montserrat, sans-serif',
  },
  // Cores para o layout
  colors: {
    primaryBlack: '#17171a',
    secondaryBlack: '#242429',
    primaryGrey: '#bcb4b4',
    secondaryGrey: '#292929',
  },
  gradients: {
    words: `background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%); 
    background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`,
    backgrounds: `
    background: -webkit-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%); 
    background: -moz-linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    background: linear-gradient(to right, #0acf6d 0%, #c9cf7a 100%);
    `,
  },
  boxShadows: {
    navBar: '0px 15px 19px -15px #a1ed00',
  },
  breakpoints: {
    smMaxW: 'screen and (max-width: 640px)',
    mdMaxW: 'screen and (max-width: 768px)',
    lgMaxW: 'screen and (max-width: 1024px)',
    smMaxH: 'screen and (max-height: 400px)',
  },
};
