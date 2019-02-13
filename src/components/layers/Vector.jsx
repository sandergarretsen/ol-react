import React, { Component } from 'react';
import OLVector from 'ol/layer/Vector';

class Vector extends Component {
  constructor(props) {
    super(props);
    this.vector = new OLVector({
      style: props.style,
    });
    props.map.addLayer(this.vector);
  }

  componentWillUnmount() {
    this.props.map.removeLayer(this.vector);
  }

  render() {
    return React.cloneElement(this.props.children, {
      vectorLayer: this.vector,
    });
  }
}

export default Vector;
