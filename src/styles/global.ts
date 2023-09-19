import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --toastify-color-success: ${props => props.theme["purple-500"]};
  }

  html {
    scroll-behavior: smooth;
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: box-shadow 0.2s;
  }
  
  :focus{
    outline: 0;
    box-shadow: 0 0 2px 1px ${props => props.theme["purple-500"]};
  }
  
  body {
    background-color: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  #root{
    min-height: 100vh;
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }
`