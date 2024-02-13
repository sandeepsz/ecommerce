import 'styled-components';
import { StyledComponentsTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledComponentsTheme {}
}
