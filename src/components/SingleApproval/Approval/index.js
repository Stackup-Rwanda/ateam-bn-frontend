import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';
import { connect } from 'react-redux';
import './Approval.scss';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getApproval, approveApproval, rejectApproval, fetchUserProfileDetails, commentsActions, addCommentsActions, deleteCommentActions } from '../../../actions';
import 'react-toastify/dist/ReactToastify.min.css';
import Popup from '../../userRole/rolePopup';


export class SingleApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
      isOpen: false,
      isLive: false,
      value: '',
      commentId: null,
    };
  }

  componentDidMount() {
    const { getApproval, id, fetchUserDetails, commentsActions } = this.props;
    const { token } = localStorage;
    getApproval(id);
    fetchUserDetails(token);
    commentsActions(id);
  }

  approve = (e) => {
    e.preventDefault();
    const { id, approveApproval } = this.props;
    approveApproval(id);
    this.setState({ isOpen: false, });
    window.location.reload(false);
  }

  reject = (e) => {
    e.preventDefault();
    const { id, rejectApproval } = this.props;
    rejectApproval(id);
    window.location.reload(true);
    this.setState({ showMe: false });
  }

  sureApprove = () => {
    const { status } = this.props.approval;
    if (status === 'Rejected' || status === 'Pending') {
      this.setState({ isOpen: true, });
    }
    return this.setState({ isLive: true });
  }

  sureReject = () => {
    const { status } = this.props.approval;
    if (status === 'Approved' || status === 'Pending') {
      this.setState({ showMe: true });
    }
    return this.setState({ isLive: true });
  }

  cancel = () => {
    this.setState({ isOpen: false, showMe: false });
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  createComment = (e) => {
    e.preventDefault();
    const { id, addCommentsActions, } = this.props;
    addCommentsActions(id, this.state.value);
    console.log(this.state.value, '...........');
    window.location.reload(true);
    this.setState({ value: '' });
  }

  deleteComment = (commentId) => {
    const { deleteCommentActions } = this.props;
    deleteCommentActions(commentId);
    window.location.reload(false);
  }

  componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;
    if (errors) {
      this.setState({ errors });
    }
    this.setState({ loading: true });
  }

  componentWillUpdate = (nextProps) => {
    const alertMessage = (nextProps.message && (nextProps.approval.status === 'Approved'
      ? toast.success(nextProps.message, { toastId: 'approve' })
      : toast.error(nextProps.message, { toastId: 'reject' }))
    ) || (nextProps.errors && toast.error(nextProps.errors.message));

    return !nextProps.loading && alertMessage;
  };

  render() {
    const { approval, loading, user, listOfComments } = this.props;
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
      <div >
        <form className="body-comment-form" onSubmit={ this.createComment }>
          <input placeholder="Add comment" onChange={ this.onChange } value={ this.state.value }/>
          <button type="submit">comment</button>
        </form>
      </div>

      <div className="body-comments">
        { !(listOfComments.keys(Comments).length === 0) ? listOfComments.map((comment, index) => (
          <div key={index} className="comment">
            <img alt="profile" src={comment.profile} />
            <div className="text">
              <p> { user.id === comment.userId ? ('me') : comment.userName } </p>
              <p>{ comment.userRole }</p>
              <p>{ comment.comment }</p>
            </div>
            <p>{ moment(comment.createdAt).format('MMMM Do YYYY') }</p>
            {user.id === comment.userId
              ? (<FontAwesomeIcon icon={ faTrash } type="submit" className="commentDelete" onClick={ () => this.deleteComment(comment.id) } />) : <p></p>}
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
                <button onClick={this.sureApprove} className="btn-approve" >Approve</button>
                <button onClick={this.sureReject} className="btn-reject">Reject</button>
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
      <div >
        { mainJsx }
       <Popup isOpen={ this.state.isOpen }>
       <div className="approve">
       <form className="approval-form" onSubmit={this.approve}>

              <p className="approval-paragraph" >Are you sure you want approve this trip request?</p>
                <br/>
           <input className="cancel-key" type="button" value="Cancel" onClick={this.cancel} />
           <input className="ok-key" type="submit" value="OK" onClick={this.approve} />
        </form>
       </div>
        </Popup>
        <Popup showMe={ this.state.showMe }>
       <div className="approve">
       <form className="approval-form" onSubmit={ this.reject } >

              <p className="approval-paragraph">Are you sure you want reject this trip request?</p>
                <br/>
           <input className="cancel-key" type="button" value="Cancel" onClick={this.cancel} />
           <input className="ok-key" type="submit" value="OK" onClick={this.reject}/>
        </form>
       </div>
        </Popup>
        <Popup isLive={ this.state.isLive }> </Popup>
      </div>
    );
  }
}

const mapStateToProps = ({
  approval, profile, comments: {
    listOfComments,
    comment,
    getComments: { commentsMessage, commentsLoading, CommentsErrors },
  }
}) => ({
  approval: approval.approval,
  message: approval.message,
  errors: approval.errors,
  loading: approval.loading,
  getSingle: approval.getApproval,
  user: profile.userProfileDetails,
  listOfComments,
  commentsMessage,
  commentsLoading,
  CommentsErrors,
  comment,
});

const mapDispatchToProps = (dispatch) => ({
  getApproval: (id) => dispatch(getApproval(id)),
  approveApproval: (id) => dispatch(approveApproval(id)),
  rejectApproval: (id) => dispatch(rejectApproval(id)),
  fetchUserDetails: (token) => dispatch(fetchUserProfileDetails(token)),
  commentsActions: (id) => dispatch(commentsActions(id)),
  addCommentsActions: (id, comment) => dispatch(addCommentsActions(id, comment)),
  deleteCommentActions: (comment) => dispatch(deleteCommentActions(comment)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SingleApproval);
