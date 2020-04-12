import { accommodationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ACCOMMODATION } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data, id) => (dispatch) => dispatch(apiAction({
  method: 'patch',
  httpOptions: {
    token,
    URL: `${ACCOMMODATION}/${id}/edit`,
    headers: { 'Content-Type': 'application/json' },
  },
  data,
  onStart: accommodationActionTypes.EDIT_ACCOMMODATION_START,
  onEnd: accommodationActionTypes.EDIT_ACCOMMODATION_END,
  onSuccess: accommodationActionTypes.EDIT_ACCOMMODATION_SUCCESS,
  onFailure: accommodationActionTypes.EDIT_ACCOMMODATION_FAILURE,
}));
