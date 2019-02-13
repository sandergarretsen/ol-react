import React, { Component } from 'react';
import OLImageCanvas from 'ol/source/ImageCanvas';

class ImageCanvas extends Component {
  constructor(props) {
    super(props);
    this.imageCanvas = new OLImageCanvas({
      canvasFunction: props.canvasFunction,
    });
    props.imageLayer.setSource(this.imageCanvas);
  }

  componentWillUnmount() {
    this.props.imageLayer.setSource(null);
  }

  render() {
    return null;
  }
}

export default ImageCanvas;
