import axios from 'axios';
import { tripsActionTypes } from '../../actionTypes';
import { backendURLs } from '../../helpers/index';

export const fetchTripRequests = () => ({ type: tripsActionTypes.FETCH_REQUEST });

export const fetchTripRequestsSuccess = (trips) => ({
  type: tripsActionTypes.FETCH_REQUEST_SUCCESS,
  payload: trips
});


export const fetchTripRequestsFailure = (error) => ({
  type: tripsActionTypes.FETCH_REQUEST_FAILURE,
  payload: error
});

export const fetchRequests = (token, page, limit) => (dispatch) => {
  const config = { headers: { token } };

  dispatch(fetchTripRequests());
  axios.get(`${backendURLs.BASE_URL}/trips?page=${page}&limit=${limit}`, config)
    .then((response) => {
      const trips = response.data.data.paginate;
      const pages = response.data.data.Next;
      dispatch(fetchTripRequestsSuccess({ trips, pages }));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(fetchTripRequestsFailure(error));
    });
};
