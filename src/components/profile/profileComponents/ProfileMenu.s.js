import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/user';
import logo from '../../../assets/images/profile/logo.png';
import home from '../../../assets/images/profile/home.png';
import menu from '../../../assets/images/profile/menu.png';
import logoutImage from '../../../assets/images/profile/logout.png';
import account from '../../../assets/images/profile/account.png';
import setting from '../../../assets/images/profile/setting.png';


class ProfileMenu extends Component {
  logoutOnClick = async (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <div className="side-menu">
        <a href="/"><img src={logo} alt="logo" className="logo" /></a>
        <a href="/"><img src={home} alt="home" /></a>
        <a href="/profile"><img src={account} alt="account" /></a>
        <a href="/"><img src={menu} alt="menu" /></a>
        <a href="/"><img src={setting} alt="setting" /></a>
        <div className="logout">
          <a href="/login"><img src={logoutImage} alt="logout" onClick={this.logoutOnClick}/></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { token, logout } }) => ({ token, logout });

export default connect(mapStateToProps, { logout })(ProfileMenu);
