import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import 'dotenv/config';

export default (page = 1, limit = 10) => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: `/users?page=${page}&limit=${limit}`,
  httpOptions: { token: localStorage.token },
  onStart: userActionTypes.GET_USERS_START,
  onEnd: userActionTypes.GET_USERS_END,
  onSuccess: userActionTypes.GET_USERS_SUCCESS,
  onFailure: userActionTypes.GET_USERS_FAIL
}));
