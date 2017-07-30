import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Title from './../components/title';
import Button from './../components/button';
import CanvasTest from './../components/canvasTest';

import * as selectors from './../data/app/app.selectors';
import * as actions from './../data/app/app.actions';

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.changeTitle('Title is changed!');
  }

  render() {
    return (
      <span>
        <CanvasTest text={this.props.title} />
        <Title>{this.props.title}</Title>
        <Button onClick={this.onClick}>click</Button>
        {this.props.isLoading && <h3>loading...</h3>}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  title: selectors.title(state),
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  changeTitle: title => dispatch(actions.changeTitle(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeContainer);

WelcomeContainer.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  changeTitle: PropTypes.func,
};

WelcomeContainer.defaultProps = {
  title: null,
  isLoading: null,
  changeTitle: null,
};

