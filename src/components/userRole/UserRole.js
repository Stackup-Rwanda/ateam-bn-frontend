/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './userList';
import MenuBar from '../MenuBar/MenuBar';
import SideBar from '../RightSideBar/RightSideBar';
import TitleBar from '../TitleBar/TitleBar/TitleBar.s';
import '../../assets/style/layout.scss';

class UserRole extends Component {
  render() {
    return (
      <div className="wrapper">
        <MenuBar />
        <div className="main">
          <TitleBar />
          <div className="container">
          <form onSubmit={this.onSubmit}>
           <select className="selector" name="" onChange={this.onChange}>
           </select>
           <input className="assign-btn" type="submit" value="Assign" />

            </form>
            <UserList />
            </div>

        </div>
        <SideBar />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { users } }) => ({ users });

export default connect(mapStateToProps, null)(UserRole);
