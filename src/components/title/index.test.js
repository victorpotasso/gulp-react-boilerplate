import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { PrimaryTheme } from './../../theme';

import Title from './index';

describe('Title', () => {
  const component = mount(
    <ThemeProvider theme={PrimaryTheme}>
      <Title>label</Title>
    </ThemeProvider>
  );
  test('renders without exploding', () => {
    expect(component.length).toEqual(1);
  });
});
