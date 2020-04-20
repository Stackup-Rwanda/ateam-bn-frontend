import { tripsActionTypes } from '../../actionTypes';
import { apiAction } from '../../helpers';
import 'dotenv/config';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: '/stats',
  httpOptions: { token: localStorage.token },
  onStart: tripsActionTypes.GET_STATS_START,
  onEnd: tripsActionTypes.GET_STATS_END,
  onSuccess: tripsActionTypes.GET_STATS_SUCCESS,
  onFailure: tripsActionTypes.GET_STATS_FAIL
}));
