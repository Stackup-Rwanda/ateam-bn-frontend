import { commentsActionsTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (id, comment) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: `/trips/${id}/comment`,
  data: { comment },
  httpOptions: { token: localStorage.token },
  onStart: commentsActionsTypes.ADD_COMMENTS_START,
  onEnd: commentsActionsTypes.ADD_COMMENTS_END,
  onSuccess: commentsActionsTypes.ADD_COMMENTS_SUCCESS,
  onFailure: commentsActionsTypes.ADD_COMMENTS_FAILURE
}));
