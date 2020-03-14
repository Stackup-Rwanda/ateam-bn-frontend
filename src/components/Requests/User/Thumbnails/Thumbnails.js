import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tripActions } from '../../../../actions';

export class Thumbnails extends Component {
  componentDidMount() {
    const { fetchRequests } = this.props;
    const { token } = localStorage;
    fetchRequests(
      token,
      1,
      6
    );
  }

  render() {
    const { requests } = this.props;
    return (
      <>
        <div className="requests">
          { requests && requests.trips && requests.trips.map((req) => (
            <div key={req.id} className="trip">
              <img alt="trip One" src={req.Accommodations.image} />
              <span className="status pending">{req.status}</span>
              <div className="details">
                <p className="details-place">Paris</p>
                <p className="details-departure">
                  Departure date:
                  {' '}
                  { moment(req.date).format('MMMM Do YYYY') }
                </p>
                <p className="details-return">
                  Return date:
                  {' '}
                  { req.returnDate ? moment(req.returnDate).format('MMMM Do YYYY') : 'Not Specified' }
                </p>
                <p className="details-city">City:</p>
                <p className="details-address">Kampala, Uganda, Africa</p>
              </div>
            </div>
          )) }
        </div>
        <div className="pagination">
          <FontAwesomeIcon icon={faAngleLeft} className="angles" />
          <span>3</span>
          <FontAwesomeIcon icon={faAngleRight} className="angles" style={{ color: '#3ab397cc' }} />
        </div>
      </>
    );
  }
}

Thumbnails.defaultProps = { requests: null };

Thumbnails.propTypes = {
  fetchRequests: PropTypes.func.isRequired,
  requests: PropTypes.shape({ trips: PropTypes.array.isRequired }),
  token: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

const mapStateToProps = ({ requests, user }) => ({ requests, token: user.token });

const mapDispatchToProps = (dispatch) => {
  const { fetchRequests } = tripActions;
  return { fetchRequests: (token, page, limit) => dispatch(fetchRequests(token, page, limit)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnails);
