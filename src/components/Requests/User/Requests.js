import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuBar from '../../MenuBar';
import Thumbnails from './Thumbnails';
import TitleBar from '../../TitleBar';
import RightSideBar from '../../RightSideBar';
import Button from './Button';
import './Requests.scss';

class Requests extends Component {
  componentWillMount() {
    const { history } = this.props;
    const { token } = localStorage;
    if (!token) {
      history.push('/login');
    }
  }

  render() {
    return (
      <div className="wrapper">
        <MenuBar />
        <div className="main">
          <TitleBar />
          <Button />
          <Thumbnails />
        </div>
        <RightSideBar />
      </div>
    );
  }
}

Requests.propTypes = { history: PropTypes.shape({ push: PropTypes.func }).isRequired };

const mapStateToProps = ({ user }) => ({ token: user.token });

export default connect(mapStateToProps, null)(Requests);
