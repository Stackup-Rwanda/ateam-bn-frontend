import requests from '../../store/initialState';
import fetchTripRequestsReducer from './fetchTripRequestsReducer';
import createTripRequestReducer from './createTripRequestReducer';
import rememberMeReducer from './rememberMeReducer';

export default (state = requests, action) => {
  const fetchRequests = fetchTripRequestsReducer(state, action);
  const createTripRequest = createTripRequestReducer(state, action);
  const rememberMe = rememberMeReducer(state, action);

  return (
    fetchRequests
      || createTripRequest
      || rememberMe
      || state
  );
};
