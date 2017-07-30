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
    this.app = new Application(window.innerWidth, 60, {
      backgroundColor: 0x1099bb,
      antialias: true,
    });
    this.el.appendChild(this.app.view);

    this.button = new Sprite();
    this.button.interactive = true;
    this.button.buttonMode = true;
    this.button.on('pointerdown', this.onClick);
    this.app.stage.addChild(this.button);

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
    this.richText.x = (this.app.renderer.width - this.richText.width) / 2;
    this.richText.y = (this.app.renderer.height - this.richText.height) / 2;

    this.button.addChild(this.richText);
  }

  componentWillReceiveProps(nextProps) {
    this.richText.text = nextProps.text;
    this.richText.x = (this.app.renderer.width - this.richText.width) / 2;
    this.richText.y = (this.app.renderer.height - this.richText.height) / 2;
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
