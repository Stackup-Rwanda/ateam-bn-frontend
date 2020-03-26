import React, { Component } from 'react';
import './TitleBar.scss';

class TitleBar extends Component {
  render() {
    return (
      <div className="title">
        <div className="title-text">
          <span>Barefoot Nomad</span>
        </div>
        <div className="title-search">
          <input type="text" placeholder="Type here to Search" />
        </div>
      </div>
    );
  }
}

export default TitleBar;
