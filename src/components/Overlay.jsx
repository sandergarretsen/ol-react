import React, { Component } from 'react';
import OLOverlay from 'ol/Overlay';
import PropTypes from 'prop-types';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
    //this.overlay.setPositioning('bottom-center');

  }

  componentDidMount() {
    const { map, position, positioning, timeout } = this.props;

    this.overlay = new OLOverlay({
      element: this.overlayRef.current,
      offset: [0, -20],
      position: this.props.position,
      positioning: positioning,
    });

    this.overlay.setPosition(this.props.position);
    map.addOverlay(this.overlay)
  }

  componentWillUnmount() {
    this.props.map.removeOverlay(this.overlay);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.position !== nextProps.position) {
      this.overlay.setPosition(nextProps.position);
    }
  }

  render() {
    const { children, style } = this.props;

    return (
      <div>
        <div ref={this.overlayRef}>
          <div style={style}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Overlay;
