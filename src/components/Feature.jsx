import React, { Component } from 'react';
import OLFeature from 'ol/Feature';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.feature = new OLFeature();
    if (props.properties) {
      this.feature.setProperties(props.properties)
    }
    props.vectorSource.addFeature(this.feature);
  }

  componentWillReceiveProps(newProps) {
    // TODO: this will not `remove` existing properties:
    // http://openlayers.org/en/latest/apidoc/ol.Feature.html
    if (newProps.properties) {
      this.feature.setProperties(newProps.properties)
    }
  }

  componentWillUnmount() {
    this.props.vectorSource.removeFeature(this.feature);
  }

  render() {
    return React.Children.toArray(this.props.children).map(child =>
      React.cloneElement(child, {
        feature: this.feature,
      }))
  }
}

export default Feature;
