import requests from '../../store/initialState';
import fetchTripRequestsReducer from './fetchTripRequestsReducer';

export default (state = requests, action) => {
  const fetchRequests = fetchTripRequestsReducer(state, action);
  return (fetchRequests);
};
