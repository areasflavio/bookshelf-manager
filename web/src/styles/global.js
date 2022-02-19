import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.backgroundPrimary};
    -webkit-font-smoothing: antialiased !important;

    position: relative;

    transition: background 1s;
  }

  body, input, button {
    font: 14px ${(props) => props.theme.fonts.text}, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  /* Scrollbar */
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) =>
      `${props.theme.colors.backgroundPrimary} ${props.theme.colors.backgroundSecondary}`};
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.colors.backgroundSecondary};
  }

`;
