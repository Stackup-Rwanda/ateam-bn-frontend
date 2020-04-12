import React, { Component } from 'react';
import Popup from './BookPopUp';
import './accommodation.scss';

class room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      roomId: ''
    };
  }

  componentDidMount() {}

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <div>
        {this.state.showPopup ? (
          <Popup roomId={this.props.room.id} closePopup={this.togglePopup.bind(this)}/>
        ) : (
          <div className="column-room box">
              <img className="rooms-img" alt="" src={this.props.room.image}/>
              <h2>{this.props.room.roomType}</h2>
              <p>cost: {this.props.room.cost}</p>
              <button onClick={this.togglePopup.bind(this)}>Book</button>
          </div>
        )}
      </div>
    );
  }
}

export default room;
