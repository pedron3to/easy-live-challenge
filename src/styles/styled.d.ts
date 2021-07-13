import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends ThemeType { }
}
