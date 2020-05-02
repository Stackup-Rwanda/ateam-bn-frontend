import initialState from '../../store/initialState';
import clearUserStoreReducer from '../user/clearUserStoreReducer';
import commentsReducer from './getCommentsReducer';
import createCommentsReducer from './createCommentsReducer';
import deleteCommentReducer from './deleteCommentReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const comments = commentsReducer(state, action);
  const createComments = createCommentsReducer(state, action);
  const deleteComment = deleteCommentReducer(state, action);
  return (
    clearUserStore
        || comments
        || createComments
        || deleteComment
        || state
  );
};
