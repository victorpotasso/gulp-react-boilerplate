import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { PrimaryTheme } from './../../theme';

import Button from './index';

describe('Button', () => {
  const component = mount(
    <ThemeProvider theme={PrimaryTheme}>
      <Button>label</Button>
    </ThemeProvider>
  );
  test('renders without exploding', () => {
    expect(component.length).toEqual(1);
  });
});
