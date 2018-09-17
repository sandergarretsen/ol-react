import React, { Component } from 'react';
import OLLineString from 'ol/geom/linestring';

class LineString extends Component {
  constructor(props) {
    super(props);
    this.linestring = new OLLineString();
    this.linestring.setCoordinates(props.coordinates);
    props.feature.setGeometry(this.linestring);
  }

  componentWillUpdate(props) {
    this.linestring.setCoordinates(props.coordinates);
  }

  componentWillUnmount() {
    this.props.feature.setGeometry(null);
  }

  render() {
    return null;
  }
}

export default LineString;
