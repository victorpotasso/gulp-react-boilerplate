import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { PrimaryTheme } from './theme';

import App from './app';
import Home from './views';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={PrimaryTheme}>
      <App>
        <Home />
      </App>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#yield')
);
