import React, { Component } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { adminGetUserAction } from '../../actions/user';

class UsersPagination extends Component {
    state = {
      page: 1,
      limit: 5
    };

    componentWillReceiveProps = (nextProps) => {
      const { loading } = nextProps;
      this.setState((prevState) => ({
        ...prevState,
        loadingPrev: loading && prevState.loadingPrev,
        loadingNext: loading && prevState.loadingNext
      }));
    };

  nextPagination = (page, limit) => {
    const { adminGetUserAction } = this.props;
    adminGetUserAction(page, limit);
  };

  prevPagination = (page, limit) => {
    const { adminGetUserAction } = this.props;
    adminGetUserAction(page, limit);
  }

  render() {
    const { Next, Previous } = this.props;
    let currentPage;
    if (Next.page === undefined) {
      currentPage = Previous.page + 1;
    } else if (Previous.page === undefined) {
      currentPage = Next.page - 1;
    } else if (Next.page !== undefined) {
      currentPage = Next.page - 1;
    } else {
      currentPage = 1;
    }
    return (
                   <div className="pagination">
          <FontAwesomeIcon icon={faAngleLeft} className="angles" style={{ color: '#3ab397cc' }}
              onClick={() => this.prevPagination(Previous.page, 10)}/>
            <span>
                {currentPage}

            </span>
         <FontAwesomeIcon icon={faAngleRight} className="angles" style={{ color: '#3ab397cc' }}
              onClick={() => this.nextPagination(Next.page, 10)} />
        </div>
    );
  }
}
UsersPagination.propTypes = {
  listOfUsers: PropTypes.array,
  maxUsersPerPage: PropTypes.number,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  getUsers: PropTypes.func
};
export default connect(null, { adminGetUserAction })(UsersPagination);
