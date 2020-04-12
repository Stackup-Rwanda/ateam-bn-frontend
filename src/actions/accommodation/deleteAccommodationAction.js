import { accommodationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ACCOMMODATION } from '../../helpers/backendURLs';

export default (id) => (dispatch) => dispatch(apiAction({
  method: 'delete',
  url: `${ACCOMMODATION}/${id}/delete`,
  onStart: accommodationActionTypes.DELETE_ACCOMMODATION_START,
  onEnd: accommodationActionTypes.DELETE_ACCOMMODATION_END,
  onSuccess: accommodationActionTypes.DELETE_ACCOMMODATION_SUCCESS,
  onFailure: accommodationActionTypes.DELETE_ACCOMMODATION_FAILURE,
}));
