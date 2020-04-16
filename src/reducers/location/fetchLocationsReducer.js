import { locationActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case locationActionTypes.FETCH_LOCATIONS_START:
      return {
        ...state,
        locations: { ...state.locations, message: '', loading: true, errors: {} }
      };
    case locationActionTypes.FETCH_LOCATIONS_END:
      return {
        ...state,
        locations: { ...state.locations, message: '', loading: false, errors: {} }
      };
    case locationActionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: {
          loading: false,
          list: [...payload.data.paginate],
          message: payload.message,
          errors: {}
        }
      };
    case locationActionTypes.FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        locations: {
          ...state.locations,
          loading: false,
          message: '',
          errors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
