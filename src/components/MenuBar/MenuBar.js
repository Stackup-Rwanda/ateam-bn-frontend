import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import home from '../../assets/images/home.png';
import menu from '../../assets/images/menu.png';
import logout from '../../assets/images/logout.png';
import account from '../../assets/images/account.png';
import trip from '../../assets/images/trip.png';
import setting from '../../assets/images/setting.png';
import './MenuBar.scss';

export class MenuBar extends Component {
  render() {
    return (
      <div className="menu">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        <div className="options">
          <a href="/"><img className="menus" src={home} alt="home" /></a>
          <a href="/"><img className="menus" src={account} alt="account" /></a>
          <a href="/"><img className="menus" src={trip} alt="trip" /></a>
          <a href="/"><img className="menus" src={menu} alt="menu" /></a>
          <a href="/"><img className="menus" src={setting} alt="setting" /></a>
        </div>
        <div className="logout">
          <a href="/"><img src={logout} alt="logout" /></a>
        </div>
      </div>
    );
  }
}

export default MenuBar;
