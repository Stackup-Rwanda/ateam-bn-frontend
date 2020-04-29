import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';
import { faEye, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tripActions } from '../../../actions';
import './SectionTwo.scss';

class SectionTwo extends Component {
  componentDidMount() {
    const { getAllRequests } = this.props;
    getAllRequests(
      1,
      3
    );
  }

  nextPagination = () => {
    const { getAllRequests, Next } = this.props;
    getAllRequests(Next.page, 3);
  };

  prevPagination = () => {
    const { getAllRequests, Previous } = this.props;
    getAllRequests(Previous.page, 3);
  }

  render() {
    const { requests, Next, Previous } = this.props;

    const currentPage = Next && !Next.page ? (
      Previous.page + 1
    ) : (
      Previous.page ? (
        Previous.page + 1
      ) : (
        Next.page - 1
      )
    );

    const jsx = requests && requests.trips ? (
      <>
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
                  <td><Link to={`approvals/${req.id}`}><FontAwesomeIcon icon={faEye} /></Link></td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
        <div className="pagination" data-test="paginationDiv">
          <FontAwesomeIcon icon={faAngleLeft} className="angles" onClick={this.prevPagination} data-test="iconPrev" />
          <span>{Next.page || Previous.page ? currentPage : 0}</span>
          <FontAwesomeIcon icon={faAngleRight} className="angles" style={{ color: '#3ab397cc' }} onClick={this.nextPagination} data-test="iconNext" />
        </div>
      </>
    ) : (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h1>You have not yet requested a trip.</h1>
      </div>
    );

    const mainJsx = requests.loading ? (
      <ClipLoader
        css={{ display: 'block', margin: '0 auto' }}
        size={150}
        color={'#3AB397'}
        loading={requests.loading}
      />
    ) : jsx;

    return (
      <div className="section-two">
        <span>Trips</span>
        {mainJsx}
      </div>
    );
  }
}

SectionTwo.defaultProps = { requests: null };

SectionTwo.propTypes = {
  getAllRequests: PropTypes.func.isRequired,
  requests: PropTypes.shape({ trips: PropTypes.array.isRequired })
};

const mapStateToProps = ({ requests }) => ({
  requests,
  Next: requests.Next,
  Previous: requests.Previous
});

const mapDispatchToProps = (dispatch) => {
  const { getAllRequests } = tripActions;
  return { getAllRequests: (page, limit) => dispatch(getAllRequests(page, limit)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);
