import React, { Component } from 'react';
import OLView from 'ol/View';
import PropTypes from 'prop-types';

class View extends Component {
  constructor(props) {
    super(props);
    this.view = new OLView({
      center: props.center || [3000, 3000],
      zoom: props.zoom || 3,
    });
    props.map.setView(this.view);
  }

  componentDidMount() {
    if (this.props.extent && !this.props.center && !this.props.zoom) {
      setTimeout(() => { // grr
        this.view.fit(this.props.extent, {duration: 300, padding: [0, 0, 0, 0] })
      }, 1);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.extent !== prevProps.extent && !this.props.center && !this.props.zoom) {
      this.view.fit(this.props.extent, {duration: 300, padding: [0, 0, 0, 0] })
    }
  }

  componentWillUnmount() {
    this.props.map.setView(null);
  }

  render() {
    return null;
  }
}

View.defaultProps = {
  center: undefined,
  zoom: undefined,
  extent: undefined,
};

View.propTypes = {
  // map: PropTypes.object.isRequired,
  center: PropTypes.arrayOf(PropTypes.number),//.isRequired,
  zoom: PropTypes.number,
  extent: PropTypes.arrayOf(PropTypes.number),
};

export default View;
