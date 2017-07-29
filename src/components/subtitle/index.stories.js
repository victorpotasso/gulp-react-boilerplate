import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { PrimaryTheme, DarkerTheme } from './../../theme';
import Subtitle from './index';

storiesOf('Subtitle', module)
  .add('default', () => (
    <ThemeProvider theme={PrimaryTheme}>
      <Subtitle>
        Subtitle
      </Subtitle>
    </ThemeProvider>
  ))
  .add('dark-theme', () => (
    <ThemeProvider theme={DarkerTheme}>
      <Subtitle>
        Subtitle
      </Subtitle>
    </ThemeProvider>
  ));
