import initialState from '../../store/initialState';
import accommodationReducer from './newAccommodationReducer';
import fetchAccommodationReducer from './fetchAccommodationReducer';
import fetchSingleAccommodationReducer from './fetchSingleAccommodationReducer';
import deleteAccommodationReducer from './deleteAccommodationReducer';
import editAccommodationReducer from './editAccommodationReducer';

export default (state = initialState, action) => {
  const newAccommodation = accommodationReducer(state, action);
  const fetchAccommodation = fetchAccommodationReducer(state, action);
  const fetchSingleAccommodation = fetchSingleAccommodationReducer(
    state,
    action
  );
  const deleteAccommodation = deleteAccommodationReducer(state, action);
  const editAccommodation = editAccommodationReducer(state, action);
  return (
    newAccommodation
    || fetchAccommodation
    || fetchSingleAccommodation
    || deleteAccommodation
    || editAccommodation
    || state
  );
};
