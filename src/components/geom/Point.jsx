import React, { Component } from 'react';
import OLPoint from 'ol/geom/point';

class Point extends Component {
  constructor(props) {
    super(props);
    this.point = new OLPoint();
    this.point.setCoordinates(props.coordinates)
    props.feature.setGeometry(this.point);
  }

  componentWillUnmount() {
    this.props.feature.setGeometry(null);
  }

  render() {
    return null;
  }
}

export default Point;
