import { accommodationActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import { ACCOMMODATION } from '../../helpers/backendURLs';

const token = localStorage.getItem('token');
export default (data) => (dispatch) => dispatch(apiAction({
  method: 'post',
  httpOptions: {
    token,
    URL: ACCOMMODATION,
    headers: { 'Content-Type': 'application/json' },
  },
  data,
  onStart: accommodationActionTypes.CREATE_ACCOMMODATION_REQUEST,
  onEnd: accommodationActionTypes.CREATE_ACCOMMODATION_END,
  onSuccess: accommodationActionTypes.CREATE_ACCOMMODATION_SUCCESS,
  onFailure: accommodationActionTypes.CREATE_ACCOMMODATION_FAILURE,
}));
