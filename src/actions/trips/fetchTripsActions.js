import { tripsActionTypes as tripsTypes } from '../../actionTypes';
import { BASE_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

export const getAllRequests = (page = 1, limit = 10) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${BASE_URL}/trips?page=${page}&limit=${limit}`,
  onStart: tripsTypes.FETCH_REQUEST_START,
  onEnd: tripsTypes.FETCH_REQUEST_END,
  onSuccess: tripsTypes.FETCH_REQUEST_SUCCESS,
  onFailure: tripsTypes.FETCH_REQUEST_FAILURE
}));
