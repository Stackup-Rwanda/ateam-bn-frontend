import initialState from '../../store/initialState';
import clearUserStoreReducer from '../user/clearUserStoreReducer';
import popularDestinationReducer from './populaDestinationReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const popularDestinations = popularDestinationReducer(state, action);
  return (
    clearUserStore
        || popularDestinations
        || state
  );
};
