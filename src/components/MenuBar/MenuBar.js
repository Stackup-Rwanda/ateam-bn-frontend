import React, { Component } from 'react';
import {
  faHome,
  faUserCircle,
  faCog,
  faSignOutAlt,
  faPlaneDeparture
} from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.png';
import './MenuBar.scss';

export class MenuBar extends Component {
  render() {
    return (
      <div className="menu">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        <div className="options">
          <a href="/"><FontAwesomeIcon icon={faHome} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faUserCircle} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faListAlt} className="menus" size="2x" /></a>
          <a href="/"><FontAwesomeIcon icon={faCog} className="menus" size="2x" /></a>
        </div>
        <div className="logout">
          <a href="/"><FontAwesomeIcon icon={faSignOutAlt} className="menus" size="2x" /></a>
        </div>
      </div>
    );
  }
}
export default MenuBar;
