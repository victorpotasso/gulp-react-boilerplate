import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { PrimaryTheme } from './../../theme';

import Subtitle from './index';

describe('Subtitle', () => {
  const component = mount(
    <ThemeProvider theme={PrimaryTheme}>
      <Subtitle>label</Subtitle>
    </ThemeProvider>
  );
  test('renders without exploding', () => {
    expect(component.length).toEqual(1);
  });
});
