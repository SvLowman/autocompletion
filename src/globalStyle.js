import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --selected: blue;
  --background: cyan;
  --paper: white;
  --label-background: lightgray;
}

body {
  margin: 0;
  font-size: 16px;
}

h1 {
    color: var(--paper);
}
`;

export default GlobalStyle;
