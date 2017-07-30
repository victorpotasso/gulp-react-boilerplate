import React from 'react';
import { mount } from 'enzyme';

import CanvasTest from './index';

describe('CanvasTest', () => {
  const component = mount(<CanvasTest />);
  test('renders without exploding', () => {
    expect(component.length).toEqual(1);
  });
});
