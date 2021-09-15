import { createGlobalStyle } from "styled-components";

export const FontFaceStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: local('Helvetica'), url('/assets/fonts/Helvetica.ttf') format('truetype');
  }
`;
