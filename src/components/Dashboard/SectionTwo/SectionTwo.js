import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tripActions } from '../../../actions';
import './SectionTwo.scss';

class SectionTwo extends Component {
  componentDidMount() {
    const { fetchRequests } = this.props;
    const { token } = localStorage;
    fetchRequests(
      token,
      1,
      3
    );
  }

  render() {
    const { requests } = this.props;

    const jsx = requests && requests.trips ? (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Accomodation</th>
              <th>Trip type</th>
              <th>Departure date</th>
              <th>Return date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { requests.trips.map((req) => (
              <tr key={req.id}>
                <td>
                  <img alt="paris" src={req.Accommodations.image} />
                </td>
                <td>{`${req.tripType} Trip`}</td>
                <td>{ moment(req.date).format('MMMM Do YYYY') }</td>
                <td>{ req.returnDate ? moment(req.returnDate).format('MMMM Do YYYY') : 'Not Specified' }</td>
                <td><span className={req.status.toLowerCase()}>{req.status}</span></td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    ) : (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h1>You have not yet requested a trip.</h1>
      </div>
    );

    return (
      <div className="section-two">
        <span>Trips</span>
        {jsx}
      </div>
    );
  }
}

SectionTwo.defaultProps = { requests: null };

SectionTwo.propTypes = {
  fetchRequests: PropTypes.func.isRequired,
  requests: PropTypes.shape({ trips: PropTypes.array.isRequired })
};

const mapStateToProps = ({ requests }) => ({ requests });

const mapDispatchToProps = (dispatch) => {
  const { fetchRequests } = tripActions;
  return { fetchRequests: (token, page, limit) => dispatch(fetchRequests(token, page, limit)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);
