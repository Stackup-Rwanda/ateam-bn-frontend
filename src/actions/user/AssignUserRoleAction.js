import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (role, username) => (dispatch) => dispatch(apiAction({
  method: 'patch',
  url: `/users/${username}/role`,
  data: { role },
  httpOptions: { token: localStorage.token },
  onStart: userActionTypes.ADMIN_EDIT_ROLE_START,
  onEnd: userActionTypes.ADMIN_EDIT_ROLE_END,
  onSuccess: userActionTypes.ADMIN_EDIT_ROLE_SUCCESS,
  onFailure: userActionTypes.ADMIN_EDIT_ROLE_FAIL
}));
