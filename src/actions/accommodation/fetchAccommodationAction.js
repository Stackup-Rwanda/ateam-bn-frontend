import { accommodationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ACCOMMODATION } from '../../helpers/backendURLs';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: ACCOMMODATION,
  onStart: accommodationActionTypes.FETCH_ACCOMMODATION_START,
  onEnd: accommodationActionTypes.FETCH_ACCOMMODATION_END,
  onSuccess: accommodationActionTypes.FETCH_ACCOMMODATION_SUCCESS,
  onFailure: accommodationActionTypes.FETCH_ACCOMMODATION_FAILURE
}));
