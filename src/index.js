import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { persistor, store } from 'redux/store';
import {App} from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import {FontStyles} from 'components/FontStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="wallet-project-front">
            <FontStyles/>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  // </React.StrictMode>
);