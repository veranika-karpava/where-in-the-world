import { createGlobalStyle } from 'styled-components';
import { fontWeight, fontSize } from './stylesLib.js';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Nunito Sans', serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
}

h1 {
    font-weight: ${fontWeight.extraBold};
    font-size: ${fontSize.logo};
}

h2 {
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.primary};
}

p {
    font-weight: ${fontWeight.textWeigth};
    font-size: ${fontSize.secondary};
}

button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;