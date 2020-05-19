const commentsInitialState = {
  listOfComments: [],
  getComments: {
    commentsLoading: false,
    commentsMessage: '',
    commentsErrors: {},
  },
  comment: {},
  addComments: {
    commentsLoading: false,
    commentsMessage: '',
    commentsErrors: {},
  },
  deleteComment: {
    commentsLoading: false,
    commentsMessage: '',
    commentsErrors: {},
  }
};

export default commentsInitialState;
