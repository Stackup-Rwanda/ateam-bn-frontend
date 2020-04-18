import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faBell, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RightSideBar.scss';
import tripStatsAction from '../../actions/trips/tripStatsAction';

class RightSideBar extends Component {
  componentDidMount() {
    const { tripStatsAction } = this.props;
    tripStatsAction();
  }

  render() {
    const { listOfStats } = this.props;
    console.log(listOfStats, '000000000000000000');
    return (
      <div className="right-sidebar">
        <div className="title">
          <ul>
            <li><a href="/">Stats</a></li>
            <li>
              <a href="/">
                <span>Notifications </span>
                <span className="notification">
                  <FontAwesomeIcon icon={faBell} className="faIcon" />
                  <span className="badge">44</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="stats">
          <div className="status">
            <div className="icon">
              <FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" />
            </div>
            <div className="text">
              <p className="approved">Approved</p>
              <p>{listOfStats.approved}</p>
            </div>
          </div>
          <div className="status">
            <div className="icon">
              <FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" />
            </div>
            <div className="text">
              <p className="pending">Pending</p>
              <p>{listOfStats.pending}</p>
            </div>
          </div>
          <div className="status">
            <div className="icon">
              <FontAwesomeIcon icon={faPlaneDeparture} className="menus" size="2x" />
            </div>
            <div className="text">
              <p className="rejected">Rejected</p>
              <p>{listOfStats.rejected}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  stats: {
    listOfStats,
    getStats: { message, loading, statsErrors }
  }
}) => ({
  listOfStats,
  message,
  loading,
  statsErrors
});
export default connect(
  mapStateToProps,
  { tripStatsAction }
)(RightSideBar);
