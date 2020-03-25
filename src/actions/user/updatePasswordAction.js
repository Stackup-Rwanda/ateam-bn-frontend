import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (form, userId, token) => (dispatch) => dispatch(apiAction({
  method: 'patch',
  url: `/auth/update-password/${userId}/${token}`,
  data: { ...form },
  onStart: userActionTypes.RESET_PASSWORD_START,
  onEnd: userActionTypes.RESET_PASSWORD_END,
  onSuccess: userActionTypes.RESET_PASSWORD_SUCCESS,
  onFailure: userActionTypes.RESET_PASSWORD_FAILURE
}));
