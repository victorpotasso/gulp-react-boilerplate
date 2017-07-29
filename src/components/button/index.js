import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Button = ({ children, className }) =>
  <button className={className}>{ children }</button>;

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: null,
};

export default withTheme(styled(Button)`
  font-size: 1em;
  text-align: center;
  background-color: ${(props) => props.theme.bbg};
  color: ${(props) => props.theme.tc};
  text-transform: uppercase;
`);
