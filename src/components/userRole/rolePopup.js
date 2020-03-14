/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Popup extends Component {
  render() {
    let popup = (
      <div>
        <div>{ this.props.children}</div>
      </div>
    );
    if (!this.props.isOpen) {
      popup = null;
    }
    return (
      <div>
        {popup}
      </div>
    );
  }
}

export default Popup;
