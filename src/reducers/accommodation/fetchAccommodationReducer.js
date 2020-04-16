import { accommodationActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case accommodationActionTypes.FETCH_ACCOMMODATION_START:
      return {
        ...state,
        accommodations: { ...state.accommodations, message: '', loading: true, errors: {} }
      };
    case accommodationActionTypes.FETCH_ACCOMMODATION_END:
      return {
        ...state,
        accommodations: { ...state.accommodations, message: '', loading: false, errors: {} }
      };
    case accommodationActionTypes.FETCH_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        accommodations: {
          loading: false,
          list: [...payload.data.paginate],
          message: payload.message,
          errors: {}
        }
      };
    case accommodationActionTypes.FETCH_ACCOMMODATION_FAILURE:
      return {
        ...state,
        accommodations: {
          ...state.accommodations,
          loading: false,
          message: '',
          errors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
