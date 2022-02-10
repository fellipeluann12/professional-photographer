import { ThemeProvider } from 'styled-components';
import { pattern as theme } from './pattern';
import * as S from '../Global.styled';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <S.Global />
    {children}
  </ThemeProvider>
);

export default Theme;
