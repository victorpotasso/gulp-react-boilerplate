import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { PrimaryTheme, DarkerTheme } from './../../theme';

import Title from './index';

storiesOf('Title', module)
  .add(
    'default',
    () => (
      <ThemeProvider theme={PrimaryTheme}>
        <Title>Title here</Title>
      </ThemeProvider>
    ),
  )
  .add(
    'dark-theme',
    () => (
      <ThemeProvider theme={DarkerTheme}>
        <Title>Title here</Title>
      </ThemeProvider>
    ),
  );
