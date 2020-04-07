import { userActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { LOGOUT_URL } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');

export default () => (dispatch) => dispatch(apiAction({
  method: 'post',
  httpOptions: { token, URL: LOGOUT_URL },
  onStart: userActionTypes.LOGOUT_START,
  onSuccess: userActionTypes.LOGOUT_SUCCESS,
  onFailure: userActionTypes.LOGOUT_FAILURE,
  onEnd: userActionTypes.LOGOUT_END
}));
