import { ThemeProvider } from 'styled-components';
import { pattern as theme } from './pattern';
import GlobalStyles from '../GlobalStyles';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
