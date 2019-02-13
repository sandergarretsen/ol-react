import React, { Component } from 'react';
import OLPoint from 'ol/geom/Point';

class Point extends Component {
  constructor(props) {
    super(props);

    const { coordinates } = this.props;
    this.point = new OLPoint(coordinates);
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
