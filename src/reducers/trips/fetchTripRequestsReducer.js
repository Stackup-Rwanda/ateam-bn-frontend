import { tripsActionTypes, searchType } from '../../actionTypes';
import requests from '../../store/initialState';

export default (state = requests, { type, payload }) => {
  switch (type) {
    case tripsActionTypes.FETCH_REQUEST_START:
      return {
        ...state,
        loading: true
      };
    case tripsActionTypes.FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        trips: [...payload.data.paginate],
        pages: payload.pages,
        Next: { ...payload.data.Next },
        Previous: { ...payload.data.Previous },
        error: null,
        loading: false
      };
    case tripsActionTypes.FETCH_REQUEST_END:
      return {
        ...state,
        getRequests: { ...state.getRequests, message: '', loading: false, errors: {} }
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
      return null;
  }
};
