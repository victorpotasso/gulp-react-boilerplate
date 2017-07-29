import styled, { withTheme } from 'styled-components';

export default withTheme(styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.tc};
`);
