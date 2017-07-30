import React from 'react';
import { storiesOf } from '@storybook/react';

import CanvasTest from './index';

storiesOf('CanvasTest', module)
  .add('default', () => (
    <CanvasTest>
      CanvasTest
    </CanvasTest>
  ));
