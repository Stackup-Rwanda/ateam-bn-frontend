import initialState from '../../store/initialState';
import fetchAccommodationReducer from './fetchAccommodationReducer';

export default (state = initialState, action) => {
  const fetchAccommodation = fetchAccommodationReducer(state, action);
  return (
    fetchAccommodation
      || state
  );
};
