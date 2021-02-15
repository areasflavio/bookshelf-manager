import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import ThemeWrapper from './Theme';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeWrapper>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={5000} />
          </ThemeWrapper>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
