import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import MenuBar from '../MenuBar';
import SideBar from '../RightSideBar';
import TitleBar from '../TitleBar';
import SingleApproval from './Approval';
import '../../assets/style/layout.scss';

export class Approval extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    console.log(this.props.match.url);
    return (
      <div className="wrapper" data-test="approvalsComponent">
        <MenuBar data-test="menuBarComponent" />
        <div className="main" data-test="mainDiv">
          <TitleBar data-test="titleBarComponent" />
          <SingleApproval id={id}/>
        </div>
        <SideBar data-test="sideBarComponent" />
      </div>
    );
  }
}

export default Approval;
