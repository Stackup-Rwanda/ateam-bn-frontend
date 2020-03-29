import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <>
        <button className="dont-mess-mine-use-class-please" type="button">Add Trip</button>
      </>
    );
  }
}

export default Button;
