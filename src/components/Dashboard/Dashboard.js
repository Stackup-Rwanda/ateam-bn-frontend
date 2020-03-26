import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuBar from '../MenuBar';
import SideBar from '../RightSideBar';
import TitleBar from '../TitleBar';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import '../../assets/style/layout.scss';

class Dashboard extends Component {
  // componentWillMount() {
  //   const { token, history } = this.props;
  //   if (!token) {
  //     history.push('/login');
  //   }
  // }

  render() {
    return (
      <div className="wrapper">
        <MenuBar />
        <div className="main">
          <TitleBar />
          <SectionOne />
          <SectionTwo />
        </div>
        <SideBar />
      </div>
    );
  }
}

Dashboard.defaultProps = { token: null };

Dashboard.propTypes = {
  token: PropTypes.string,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

const mapStateToProps = ({ user }) => ({ token: user.token });

export default connect(mapStateToProps, null)(Dashboard);
export { Dashboard };
