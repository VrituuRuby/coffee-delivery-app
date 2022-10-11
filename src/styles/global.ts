import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button:hover{
    cursor: pointer;
  }

  body {
    background-color: ${props => props.theme.white};
  }
`