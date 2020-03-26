import { requests as initialState } from '../../store/initialState';
import fetchTripRequestsReducer from './fetchTripRequestsReducer';

export default (state = initialState, action) => {
  const fetchRequests = fetchTripRequestsReducer(state, action);
  return (fetchRequests || state);
};
