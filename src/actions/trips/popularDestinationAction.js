import { tripsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import 'dotenv/config';

export default (page = 1, limit = 5) => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: `/location/most-travelled-destination?page=${page}&limit=${limit}`,
  httpOptions: { token: localStorage.token },
  onStart: tripsActionTypes.GET_DESTINATION_START,
  onEnd: tripsActionTypes.GET_DESTINATION_END,
  onSuccess: tripsActionTypes.GET_DESTINATION_SUCCESS,
  onFailure: tripsActionTypes.GET_DESTINATION_FAIL
}));
