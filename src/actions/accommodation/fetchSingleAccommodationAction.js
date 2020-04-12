import { accommodationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ACCOMMODATION } from '../../helpers/backendURLs';

export default (id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: `${ACCOMMODATION}/${id}`,
  onStart: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_START,
  onEnd: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_END,
  onSuccess: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_SUCCESS,
  onFailure: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_FAILURE,
}));
