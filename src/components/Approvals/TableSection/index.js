import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { faEye, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllApprovals } from '../../../actions';
import './TableSection.scss';

class TableSection extends Component {
  componentDidMount() {
    const { getAllApprovals } = this.props;
    getAllApprovals();
  }

  nextPagination = () => {
    const { getAllApprovals, Next } = this.props;
    getAllApprovals(Next.page, 10);
  };

  prevPagination = () => {
    const { getAllApprovals, Previous } = this.props;
    getAllApprovals(Previous.page, 10);
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { listOfApprovals, errors, Next, Previous } = this.props;

    const currentPage = Next && !Next.page ? (
      Previous.page + 1
    ) : (
      Previous.page ? (
        Previous.page + 1
      ) : (
        Next.page - 1
      )
    );

    const approvals = listOfApprovals.length > 0 ? listOfApprovals : null;

    const jsx = approvals && approvals.map((approval, index) => (
      <tr key={index}>
        <td>{approval.User.name}</td>
        <td><img alt="profileImage" src={approval.User.profilePhoto} /></td>
        <td><img alt="AccomodationImage" src={approval.Accommodations.image} /></td>
        <td>{approval.tripType}</td>
        <td>{ moment(approval.date).format('MMMM Do YYYY') }</td>
        <td>{ approval.returnDate ? moment(approval.returnDate).format('MMMM Do YYYY') : 'Not Specified' }</td>
        <td><span className={approval.status.toLowerCase()}>{approval.status}</span></td>
        <td><Link to={`approvals/${approval.id}`}><FontAwesomeIcon icon={faEye} /></Link></td>
      </tr>));

    return (
      <>
        <div className="table-section" data-test="tableSectionComponent">
          <span data-test="titleSpan">Requested Trips</span>
          <div className="table" data-test="approvalsTable">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Picture</th>
                  <th>Accommodation</th>
                  <th>Trip type</th>
                  <th>Departure date</th>
                  <th>Return date</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {jsx}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination" data-test="paginationDiv">
          <FontAwesomeIcon icon={faAngleLeft} className="angles" onClick={this.nextPagination} data-test="iconPrev" />
          <span>{Next.page || Previous.page ? currentPage : 0}</span>
          <FontAwesomeIcon icon={faAngleRight} className="angles" style={{ color: '#3ab397cc' }} onClick={this.nextPagination} data-test="iconNext" />
        </div>
      </>
    );
  }
}

TableSection.propTypes = {
  listOfApprovals: PropTypes.array,
  Next: PropTypes.shape(),
  Previous: PropTypes.shape(),
  errors: PropTypes.shape(),
  loading: PropTypes.bool
};

const mapStateToProps = ({ approvals }) => ({
  listOfApprovals: approvals.listOfApprovals,
  Next: approvals.Next,
  Previous: approvals.Previous,
  errors: approvals.errors,
  loading: approvals.loading
});

const mapDispatchToProps = (dispatch) => ({ getAllApprovals: (token, page, limit) => dispatch(getAllApprovals(token, page, limit)) });

export default connect(mapStateToProps, mapDispatchToProps)(TableSection);
export { TableSection };
