import React from 'react';
import PropTypes from 'prop-types';
import {
  Application,
  Text,
  TextStyle,
  Sprite,
} from 'pixi.js';

/**
 * CanvasTest
 */
export default class CanvasTest extends React.Component {
  componentDidMount() {
    this.app = new Application(600, 60, {
      backgroundColor: 0x1099bb,
      antialias: true,
    });
    this.el.appendChild(this.app.view);

    this.container = new Sprite();
    this.container.on('click', this.onClick);
    this.app.stage.addChild(this.container);

    this.style = new TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 600,
    });

    this.richText = new Text(this.props.text, this.style);
    this.richText.x = 0;
    this.richText.y = 0;

    this.container.addChild(this.richText);
  }

  componentWillReceiveProps(nextProps) {
    this.richText.text = nextProps.text;
  }

  onClick() {
    console.log('click!');
  }

  render() {
    return (
      <span ref={(ref) => { this.el = ref; }} />
    );
  }
}

CanvasTest.propTypes = {
  text: PropTypes.string,
};

CanvasTest.defaultProps = {
  text: '',
};
