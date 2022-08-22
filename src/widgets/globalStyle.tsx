import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :where(html) {
    font-family: system-ui;
  }
`;
