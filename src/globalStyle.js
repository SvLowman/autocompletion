import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --background: #d4d4d4;
}

body {
  margin: 0;
  font-size: 16px;
}
`;

export default GlobalStyle;
