import React, { Component } from 'react';
import OLBingMaps from 'ol/source/bingmaps';

class BingMaps extends Component {
  constructor(props) {
    super(props);
    this.bingMaps = new OLBingMaps({
      key: props.apiKey,
      imagerySet: props.imagerySet,
    });
    props.tileLayer.setSource(this.bingMaps);
  }

  componentWillUnmount() {
    this.props.tileLayer.setSource(null);
  }

  render() {
    return null;
  }
}



export default BingMaps;
