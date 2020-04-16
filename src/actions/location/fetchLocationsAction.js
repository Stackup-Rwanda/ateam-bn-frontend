import { locationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: '/places',
  httpOptions: { token: localStorage.token },
  onStart: locationActionTypes.FETCH_LOCATIONS_START,
  onEnd: locationActionTypes.FETCH_LOCATIONS_END,
  onSuccess: locationActionTypes.FETCH_LOCATIONS_SUCCESS,
  onFailure: locationActionTypes.FETCH_LOCATIONS_FAILURE
}));
