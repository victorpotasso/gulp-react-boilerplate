import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Button = ({ children, className, onClick }) => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: null,
  onClick: null,
};

export default withTheme(styled(Button)`
  font-size: 1em;
  text-align: center;
  background-color: ${props => props.theme.bbg};
  color: ${props => props.theme.tc};
  text-transform: uppercase;
`);
