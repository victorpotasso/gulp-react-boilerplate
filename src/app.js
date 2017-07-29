import React from 'react';
import { injectGlobal, withTheme } from 'styled-components';

const inject = (theme) => injectGlobal`
  body {
    background-color: ${theme.bg};
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

export default withTheme(({ theme, children }) => {
  inject(theme);
  return <main>{ children }</main>;
});
