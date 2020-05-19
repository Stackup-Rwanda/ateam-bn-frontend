import { commentsActionsTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) => dispatch(apiAction({
  method: 'delete',
  url: `/comments/${id}/delete`,
  httpOptions: { token: localStorage.token },
  onStart: commentsActionsTypes.DELETE_COMMENTS_START,
  onEnd: commentsActionsTypes.DELETE_COMMENTS_END,
  onSuccess: commentsActionsTypes.DELETE_COMMENTS_SUCCESS,
  onFailure: commentsActionsTypes.DELETE_COMMENTS_FAILURE
}));
