import initialState from '../../store/initialState';
import fetchLocationsReducer from './fetchLocationsReducer';

export default (state = initialState, action) => {
  const fetchLocations = fetchLocationsReducer(state, action);
  return (
    fetchLocations
      || state
  );
};
