import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 html {
  box-sizing: border-box;
 }

 *, *::after, *::before {
  box-sizing: inherit;
 }

 body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
 }

 a, button {
  font-family: 'Montserrat', sans-serif;
  border: none;
 }

 button:hover {
    cursor: pointer;
 }

`;
