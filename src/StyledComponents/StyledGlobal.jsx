import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'JetBrains Mono', monospace;
  }
`;


// @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100;400&display=swap');

// :root {
//   --cor0: #130233;
//   --cor1: #dbff22;
//   --cor3: #6767af;

//   --texto-corrido: 'Roboto', sans-serif;
//   --titulo: 'M PLUS 1 Code', sans-serif;
//   --texto-pequeno: 'Comfortaa', cursive;
//   --destaque: 'Dancing Script', cursive;
// }

