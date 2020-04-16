import { accommodationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: '/accommodation',
  onStart: accommodationActionTypes.FETCH_ACCOMMODATION_START,
  onEnd: accommodationActionTypes.FETCH_ACCOMMODATION_END,
  onSuccess: accommodationActionTypes.FETCH_ACCOMMODATION_SUCCESS,
  onFailure: accommodationActionTypes.FETCH_ACCOMMODATION_FAILURE
}));
