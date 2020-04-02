import { tripsActionTypes, searchType } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case tripsActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case tripsActionTypes.FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        trips: [...payload.trips],
        pages: payload.pages,
        error: null,
        loading: false
      };
    case tripsActionTypes.FETCH_REQUEST_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case searchType.SEARCH_SUCCESS:
      return {
        ...state,
        trips: [...payload],
        searchErrors: ' '
      };
    case searchType.SEARCH_FAILURE:
      return {
        ...state,
        searchErrors: payload
      };
    default:
      return state;
  }
};
