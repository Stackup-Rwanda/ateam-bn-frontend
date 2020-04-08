import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuBar from '../MenuBar';
import SideBar from '../RightSideBar';
import TitleBar from '../TitleBar';
import '../../assets/style/layout.scss';
import TableSection from './TableSection';

class Approvals extends Component {
  componentWillMount() {
    const { history } = this.props;
    const { token } = localStorage;
    if (!token) {
      history.push('/login');
    }
  }

  render() {
    return (
      <div className="wrapper" data-test="approvalsComponent">
        <MenuBar data-test="menuBarComponent" />
        <div className="main" data-test="mainDiv">
          <TitleBar data-test="titleBarComponent" />
          <TableSection data-test="tableSectionComponent" />
        </div>
        <SideBar data-test="sideBarComponent" />
      </div>
    );
  }
}

Approvals.propTypes = { history: PropTypes.shape({ push: PropTypes.func }).isRequired };

export default Approvals;
