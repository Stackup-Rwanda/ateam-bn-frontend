import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (email) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: '/auth/reset-password',
  data: { email },
  onStart: userActionTypes.FORGOT_PASSWORD_START,
  onEnd: userActionTypes.FORGOT_PASSWORD_END,
  onSuccess: userActionTypes.FORGOT_PASSWORD_SUCCESS,
  onFailure: userActionTypes.FORGOT_PASSWORD_FAILURE
}));
