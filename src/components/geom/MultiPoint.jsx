import React, { Component } from 'react';
import OLMultiPoint from 'ol/geom/MultiPoint';

class MultiPoint extends Component {
  constructor(props) {
    super(props);
    this.multipoint = new OLMultiPoint();
    this.multipoint.setCoordinates(props.coordinates);
    props.feature.setGeometry(this.multipoint);
  }

  componentWillUpdate(props) {
    this.multipoint.setCoordinates(props.coordinates);
  }

  componentWillUnmount() {
    this.props.feature.setGeometry(null);
  }

  render() {
    return null;
  }
}

export default MultiPoint;
