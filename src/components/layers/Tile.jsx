import React, { Component } from 'react';
import OLTile from 'ol/layer/tile';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.tile = new OLTile({
      visible: props.visible || true,
      zIndex: props.zIndex || 0,
    });
    props.map.addLayer(this.tile);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.visible !== newProps.visible) {
      this.tile.setVisible(newProps.visible);
    }
    if (this.props.zIndex !== newProps.zIndex) {
      this.tile.setZIndex(newProps.zIndex);
    }
  }

  componentWillUnmount() {
    this.props.map.removeLayer(this.tile);
  }

  render() {
    return React.cloneElement(this.props.children, {
      tileLayer: this.tile,
    });
  }
}

export default Tile;
