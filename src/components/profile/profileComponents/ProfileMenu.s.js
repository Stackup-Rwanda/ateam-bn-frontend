import React, { Component } from 'react';
import logo from '../../../assets/images/profile/logo.png';
import home from '../../../assets/images/profile/home.png';
import menu from '../../../assets/images/profile/menu.png';
import logout from '../../../assets/images/profile/logout.png';
import account from '../../../assets/images/profile/account.png';
import setting from '../../../assets/images/profile/setting.png';


export default class ProfileMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <a href="/"><img src={logo} alt="logo" className="logo" /></a>
        <a href="/"><img src={home} alt="home" /></a>
        <a href="/profile"><img src={account} alt="account" /></a>
        <a href="/"><img src={menu} alt="menu" /></a>
        <a href="/"><img src={setting} alt="setting" /></a>
        <div className="logout">
          <a href="/"><img src={logout} alt="logout" /></a>
        </div>
      </div>
    );
  }
}
