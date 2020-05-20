import { rememberMeActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: '/profile/rememberMe',
  onStart: rememberMeActionTypes.FETCH_REMEMBERME_DATA_START,
  onEnd: rememberMeActionTypes.FETCH_REMEMBERME_DATA_END,
  onSuccess: rememberMeActionTypes.FETCH_REMEMBERME_DATA_SUCCESS,
  onFailure: rememberMeActionTypes.FETCH_REMEMBERME_DATA_FAILURE
}));
