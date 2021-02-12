import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

// eslint-disable-next-line no-unused-vars
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
