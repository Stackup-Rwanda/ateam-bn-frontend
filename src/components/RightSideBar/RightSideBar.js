import React, { Component } from 'react';
import { faBell, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RightSideBar.scss';

class RightSideBar extends Component {
  render() {
    return (
      <div className="right-sidebar">
        <div className="title">
          <ul>
            <li><a href="/">Stats</a></li>
            <li>
              <a href="/">
                <span>Notifications </span>
                <span className="notification">
                  <FontAwesomeIcon icon={faBell} className="faIcon" />
                  <span className="badge">44</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="stats">
          <div className="status">
            <div className="icon">
              <FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" />
            </div>
            <div className="text">
              <p className="approved">Approved</p>
              <p>3</p>
            </div>
          </div>
          <div className="status">
            <div className="icon">
              <FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" />
            </div>
            <div className="text">
              <p className="pending">Pending</p>
              <p>3</p>
            </div>
          </div>
          <div className="status">
            <div className="icon">
              <FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" />
            </div>
            <div className="text">
              <p className="rejected">Rejected</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RightSideBar;
