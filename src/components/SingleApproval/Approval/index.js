import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import { connect } from 'react-redux';
import './Approval.scss';
import { getApproval, approveApproval, rejectApproval } from '../../../actions';
import userAvatar from '../../../assets/images/user.png';

export class SingleApproval extends Component {
  componentWillMount() {
    const { getApproval, id } = this.props;
    console.log(id);
    getApproval(id);
  }

  approve = () => {
    const { id, approveApproval } = this.props;
    approveApproval(id);
  }

  reject = () => {
    const { id, rejectApproval } = this.props;
    rejectApproval(id);
  }

  componentWillReceiveProps = (nextProps) => {
    const { rejectMessage } = this.props;
    console.log(rejectMessage);
    const alertMessage = (nextProps.approveMessage && toast.success(nextProps.approveMessage))
      || (nextProps.rejectMessage && toast.error(nextProps.rejectMessage))
      || (nextProps.errors && toast.error(nextProps.errors.message));
    return !nextProps.loading && alertMessage;
  };

  render() {
    const { approval, approveMessage, rejectMessage } = this.props;
    const Accommodation = { ...approval.Accommodations };
    const Comments = { ...approval.Comments };

    const status = approval.status === 'Approved' ? (
      approveMessage !== '' ? 'Approved' : (
        rejectMessage !== '' ? 'Rejected' : 'Approved'
      )
    ) : 'Rejected';

    return (
      <>
        <div className="single-approval" data-test="singleApprovalComponent">
          { (approveMessage || rejectMessage) === '' ? null : (
            <ToastContainer
              style={{ width: 'auto', textAlign: 'center', paddingLeft: '30px' }}
              position={toast.POSITION.TOP_LEFT}
              autoClose={false}
            />
          )}
          <div className="body" data-test="bodyComponent">
            <img className="body-image" alt="accoPicture" src={Accommodation.image} />
            <span className={`status ${String(status).toLowerCase()}`}>{status}</span>
            <div className="body-buttons">
              <button onClick={this.approve} className="btn-approve">Approve</button>
              <button onClick={this.reject} className="btn-reject">Reject</button>
            </div>
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
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ approval, approve, reject }) => ({
  approval: approval.approval,
  errors: approval.errors,
  loading: approval.loading,
  getSingle: approval.getApproval,
  approveMessage: approve.message,
  rejectMessage: reject.message
});

const mapDispatchToProps = (dispatch) => ({
  getApproval: (id) => dispatch(getApproval(id)),
  approveApproval: (id) => dispatch(approveApproval(id)),
  rejectApproval: (id) => dispatch(rejectApproval(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleApproval);
