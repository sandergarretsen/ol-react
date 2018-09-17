import React, { Component } from 'react';
import OLVector from 'ol/source/vector';

class Vector extends Component {
  constructor(props) {
    super(props);
    this.vector = new OLVector();
    if (props.onChange) this.vector.on('change', props.onChange)
    props.vectorLayer.setSource(this.vector);
  }

  componentWillUnmount() {
    this.props.vectorLayer.setSource(null);
  }

  render() {
    return React.Children.toArray(this.props.children).map(child =>
      React.cloneElement(child, {
        vectorSource: this.vector,
      }))
  }
}

export default Vector;
