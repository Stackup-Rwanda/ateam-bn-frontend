import initialState from '../../store/initialState';
import clearUserStoreReducer from '../user/clearUserStoreReducer';
import statistics from './statsReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const stats = statistics(state, action);
  return (
    clearUserStore
        || stats
        || state
  );
};
