import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--roboto), sans-serif;
    color: #E1E1E6;
  }

`;

export { GlobalStyle };
