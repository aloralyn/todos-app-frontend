import { createGlobalStyle } from "styled-components";
import { themeDefault } from "./themeDefault";

const GlobalStyle = createGlobalStyle`  
  body {
  margin: 0;
  background-color: ${themeDefault.grey9};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
