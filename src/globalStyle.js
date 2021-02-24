import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --selected: #506480;
  --background: #334c65;
  --background-gradient: #446688;
  --background-shade: #1a1d24;;
  --paper: #eef1f6;
  --paper-gradient: #ced6e5;
  --label-background: #a0aec2;
  --label-background-gradient: #8c9db5;
  --text: #1a1d24;
}

body {
  margin: 0;
  font-size: 16px;
}

h1 {
    color: var(--paper);
    font-family: 'Comfortaa', cursive;
}
`;

export default GlobalStyle;
