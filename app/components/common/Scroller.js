import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Scroller extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    topOffset: PropTypes.number.isRequired,
  };

  render() {
    const customStyles = {
      overflowY: 'auto',
      height: `calc(100vh - ${this.props.topOffset + 100}px)`,
    };

    return <div style={customStyles}>{this.props.children}</div>;
  }
}
