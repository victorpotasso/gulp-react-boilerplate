import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Subtitle = ({ children }) => <div>{children}</div>;

Subtitle.propTypes = {
  children: PropTypes.node,
};

Subtitle.defaultProps = {
  children: null,
};

export default withTheme(styled(Subtitle) `
  font-size: 1em;
`);
