import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --grid-gap: 50px;
    --grid-breakpoint: 900px;

    --white: #FFFFFF;

    --app-background: #F1F1F1;
    --card-footer: #F1F1F177;
    --divider: #EBEBEB;
    --box-shadow: #33333311;

    --text-color: #737C84;
    --text-muted: #B4B4B4;

    --text-blue: #69A3FF;
    --text-orange: #FF9632;
    --text-red: #ED1945;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    background-color: var(--app-background);
  }

  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text-color)
  }
`;
