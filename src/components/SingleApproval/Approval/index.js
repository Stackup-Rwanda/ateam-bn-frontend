import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';
import { connect } from 'react-redux';
import './Approval.scss';
import { getApproval, approveApproval, rejectApproval, fetchUserProfileDetails } from '../../../actions';
import userAvatar from '../../../assets/images/user.png';
import 'react-toastify/dist/ReactToastify.min.css';

export class SingleApproval extends Component {
  componentWillMount() {
    const { getApproval, id, fetchUserDetails } = this.props;
    const { token } = localStorage;
    getApproval(id);
    fetchUserDetails(token);
  }

  approve = () => {
    const { id, approveApproval } = this.props;
    approveApproval(id);
  }

  reject = () => {
    const { id, rejectApproval } = this.props;
    rejectApproval(id);
  }

  componentWillUpdate = (nextProps) => {
    const alertMessage = (nextProps.message && (nextProps.approval.status === 'Approved'
      ? toast.success(nextProps.message, { toastId: 'approve' })
      : toast.error(nextProps.message, { toastId: 'reject' }))
    ) || (nextProps.errors && toast.error(nextProps.errors.message));

    return !nextProps.loading && alertMessage;
  };

  render() {
    const { approval, loading, user } = this.props;
    const Accommodation = { ...approval.Accommodations };
    const Comments = { ...approval.Comments };

    let toasterMessage = null;
    if (!toast.isActive('approve') || !toast.isActive('reject')) {
      toasterMessage = <ToastContainer
        style={{ width: 'auto', textAlign: 'center', paddingLeft: '30px' }}
        position={toast.POSITION.TOP_LEFT}
        autoClose={false}
      />;
    }

    const comments = <>
      <div className="body-comment-form">
        <input placeholder="Add comment"/>
        <button>comment</button>
      </div>
      <div className="body-comments">
        { !(Object.keys(Comments).length === 0) ? Object.values(Comments).map((comment, index) => (
          <div key={index} className="comment">
            <img alt="paris" src={userAvatar} />
            <div className="text">
              <p>Comment</p>
              <p>{ comment.comment }</p>
            </div>
          </div>)) : (
          <h2>No Comment</h2>
        )}
      </div>
    </>;

    const mainJsx = loading ? (
      <div className="loader-section" data-test="LoaderComponent">
        <ClipLoader
          css={{ display: 'block', margin: '0 auto' }}
          size={150}
          color={'#3AB397'}
          loading={loading}
        />
      </div>
    ) : (
      <div className="single-approval" data-test="singleApprovalComponent">
          {toasterMessage}
          <div className="body" data-test="bodyComponent">
            <img className="body-image" alt="accoPicture" src={Accommodation.image} />
            <span className={`status ${String(approval.status).toLowerCase()}`}>{approval.status}</span>
            {user.role === 'MANAGER' ? (
              <div className="body-buttons">
                <button onClick={this.approve} className="btn-approve">Approve</button>
                <button onClick={this.reject} className="btn-reject">Reject</button>
              </div>
            ) : null }
            <div className="body-info">
              <h2>{Accommodation.name}</h2>
              <div className="dates">
                <p>Departure date: {moment(approval.date).format('MMMM Do YYYY')}</p>
                <p>Return date: { approval.returnDate ? moment(approval.returnDate).format('MMMM Do YYYY') : 'Not Specified' }</p>
              </div>
              <p>Reason: {approval.reasons}</p>
              <p>Type: {approval.tripType}</p>
              <h2>Requester</h2>
              <p>Name: {String(approval.name).toUpperCase()}</p>
            </div>
            {comments}
          </div>
      </div>
    );

    return (
      <>
        {mainJsx}
      </>
    );
  }
}

const mapStateToProps = ({ approval, profile }) => ({
  approval: approval.approval,
  message: approval.message,
  errors: approval.errors,
  loading: approval.loading,
  getSingle: approval.getApproval,
  user: profile.userProfileDetails
});

const mapDispatchToProps = (dispatch) => ({
  getApproval: (id) => dispatch(getApproval(id)),
  approveApproval: (id) => dispatch(approveApproval(id)),
  rejectApproval: (id) => dispatch(rejectApproval(id)),
  fetchUserDetails: (token) => dispatch(fetchUserProfileDetails(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleApproval);
