import { commentsActionsTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: `/trips/${id}/comments`,
  httpOptions: { token: localStorage.token },
  onStart: commentsActionsTypes.GET_COMMENTS_START,
  onEnd: commentsActionsTypes.GET_COMMENTS_END,
  onSuccess: commentsActionsTypes.GET_COMMENTS_SUCCESS,
  onFailure: commentsActionsTypes.GET_COMMENTS_FAILURE
}));
