import { tripsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (id, form) => (dispatch) => dispatch(apiAction({
  method: 'put',
  url: `/trips/${id}`,
  data: { ...form },
  httpOptions: { token: localStorage.token },
  onStart: tripsActionTypes.EDIT_TRIP_START,
  onEnd: tripsActionTypes.EDIT_TRIP_END,
  onSuccess: tripsActionTypes.EDIT_TRIP_SUCCESS,
  onFailure: tripsActionTypes.EDIT_TRIP_FAILURE
}));
