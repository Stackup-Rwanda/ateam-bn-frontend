import { tripsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';

export default (form) => (dispatch) => dispatch(apiAction({
  method: 'post',
  url: '/trips',
  data: { ...form },
  httpOptions: { token: localStorage.token },
  onStart: tripsActionTypes.CREATE_TRIP_START,
  onEnd: tripsActionTypes.CREATE_TRIP_END,
  onSuccess: tripsActionTypes.CREATE_TRIP_SUCCESS,
  onFailure: tripsActionTypes.CREATE_TRIP_FAILURE
}));
