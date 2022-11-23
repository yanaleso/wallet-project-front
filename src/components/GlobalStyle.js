import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
