import { tripsActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case tripsActionTypes.GET_STATS_START:
      return {
        ...state,
        getStats: { ...state.getStats, message: {}, loading: true, statsErrors: {} }
      };
    case tripsActionTypes.GET_STATS_END:
      return {
        ...state,
        getStats: { ...state.getStats, message: '', loading: false, statsErrors: {} }
      };
    case tripsActionTypes.GET_STATS_SUCCESS:
      return {
        ...state,
        listOfStats: payload.data,
        getStats: {
          ...state.getStats,
          loading: false,
          message: { ...payload.message },
          statsErrors: {}
        }
      };
    case tripsActionTypes.GET_STATS_FAIL:
      return {
        ...state,
        getStats: {
          loading: false,
          message: { ...payload.message },
          statsErrors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
