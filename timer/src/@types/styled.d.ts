//arquivo de definiçao de tipagens so aceita ts
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type themeType = typeof defaultTheme;
//guarda as tipagens do thema em uma variavel

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType{}
}