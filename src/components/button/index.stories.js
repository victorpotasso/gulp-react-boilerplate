import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from 'styled-components';
import { PrimaryTheme, DarkerTheme } from './../../theme';

import Button from './index';

storiesOf('Button', module)
  .add(
    'default',
    () => (
      <ThemeProvider theme={PrimaryTheme}>
        <Button onClick={action('onClick')}>label</Button>
      </ThemeProvider>
    ),
  )
  .add(
    'dark-theme',
    () => (
      <ThemeProvider theme={DarkerTheme}>
        <Button onClick={action('onClick')}>label</Button>
      </ThemeProvider>
    ),
  );
