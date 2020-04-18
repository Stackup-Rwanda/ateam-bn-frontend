import { rememberMeActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (state) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: `/profile/rememberMe/${state}`,
  onStart: rememberMeActionTypes.MAKE_REMEMBERME_START,
  onEnd: rememberMeActionTypes.MAKE_REMEMBERME_END,
  onSuccess: rememberMeActionTypes.MAKE_REMEMBERME_SUCCESS,
  onFailure: rememberMeActionTypes.MAKE_REMEMBERME_FAILURE
}));
