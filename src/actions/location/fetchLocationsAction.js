import { locationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ALL_LOCATIONS } from '../../helpers/backendURLs';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: ALL_LOCATIONS,
  httpOptions: { token: localStorage.token },
  onStart: locationActionTypes.FETCH_LOCATIONS_START,
  onEnd: locationActionTypes.FETCH_LOCATIONS_END,
  onSuccess: locationActionTypes.FETCH_LOCATIONS_SUCCESS,
  onFailure: locationActionTypes.FETCH_LOCATIONS_FAILURE
}));
