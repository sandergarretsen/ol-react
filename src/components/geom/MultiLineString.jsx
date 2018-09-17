import React, { Component } from 'react';
import OLMultiLineString from 'ol/geom/multilinestring';

class MultiLineString extends Component {
  constructor(props) {
    super(props);
    this.multilinestring = new OLMultiLineString();
    this.multilinestring.setCoordinates(props.coordinates);
    props.feature.setGeometry(this.multilinestring);
  }

  componentWillUpdate(props) {
    this.multilinestring.setCoordinates(props.coordinates);
  }

  componentWillUnmount() {
    this.props.feature.setGeometry(null);
  }

  render() {
    return null;
  }
}

export default MultiLineString;
