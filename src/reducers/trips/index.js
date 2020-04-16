import requests from '../../store/initialState';
import fetchTripRequestsReducer from './fetchTripRequestsReducer';
import createTripRequestReducer from './createTripRequestReducer';

export default (state = requests, action) => {
  const fetchRequests = fetchTripRequestsReducer(state, action);
  const createTripRequest = createTripRequestReducer(state, action);

  return (
    fetchRequests
      || createTripRequest
      || state
  );
};
