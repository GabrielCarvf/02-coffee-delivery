import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.yellow}
}

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-subtitle']};
  -webkit-font-smoothing: antialiased; 
}

input, textarea, button, body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem; 
}

*::-webkit-scrollbar {
  width: 0.35rem;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.yellow};
  border-radius: 999px;
  border: 0;
}
`
