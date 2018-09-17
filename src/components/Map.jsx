import React, { Component } from 'react';
import OLMap from 'ol/map';
//import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = new OLMap({
      logo: false,
      controls: [],
    });

    if (props.onMoveEnd) {
      this.map.on('moveend', be => props.onMoveEnd(be, this.map));
    }
    if (props.onPointerMove) {
      this.map.on('pointermove', be => props.onPointerMove(be, this.map));
    }
    if (props.onClick) {
      this.map.on('click', be => props.onClick(be, this.map));
    }
  }

  componentDidMount() {
    this.map.setTarget(this.domNode);
  }

  render() {
    //this.map.updateSize();
    return (
      <div ref={(div) => { this.domNode = div; }} style={this.props.style}>
        {
          React.Children.toArray(this.props.children).map(child =>
            React.cloneElement(child, {
              map: this.map,
            }))
        }
      </div>
    );
  }
}

// Map.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.oneOf(['View'])).isRequired,
// };

export default Map;
