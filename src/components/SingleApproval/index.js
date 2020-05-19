import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import MenuBar from '../MenuBar';
import SideBar from '../RightSideBar';
import TitleBar from '../TitleBar';
import SingleApproval from './Approval';
import '../../assets/style/layout.scss';

export class Approval extends Component {
  componentWillMount() {
    const { history } = this.props;
    const { token } = localStorage;
    if (!token) {
      history.push('/login');
    }
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="wrapper" data-test="approvalComponent">
        <MenuBar data-test="menuBarComponent" />
        <div className="main" data-test="mainDiv">
          <TitleBar data-test="titleBarComponent" />
          <SingleApproval data-test="singleApprovalComponent" id={id}/>
        </div>
        <SideBar data-test="sideBarComponent" />
      </div>
    );
  }
}

export default Approval;
