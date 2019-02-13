import React, { Component } from 'react';
import OLImage from 'ol/layer/Image';

class Image extends Component {
  constructor(props) {
    super(props);
    this.image = new OLImage({})
    props.map.addLayer(this.image);
  }

  componentWillUnmount() {
    this.props.removeLayer(this.image);
  }

  render() {
    return React.cloneElement(this.props.children, {
      imageLayer: this.image,
    });
  }
}

export default Image;
