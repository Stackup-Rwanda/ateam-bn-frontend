import {
  DELETE_ACCOMMODATION_END,
  DELETE_ACCOMMODATION_START,
  DELETE_ACCOMMODATION_FAILURE,
  DELETE_ACCOMMODATION_SUCCESS,
} from '../../actionTypes/accommodationActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case DELETE_ACCOMMODATION_START:
      return {
        ...state,
        loading: true,
        message: null,
        accommodationErrors: null,
      };
    case DELETE_ACCOMMODATION_SUCCESS:
      window.location.replace('/accommodations');
      return {
        ...state,
        loading: false,
        message: payload.message,
        accommodationErrors: null,
      };
    case DELETE_ACCOMMODATION_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        accommodationErrors: payload.error,
      };
    case DELETE_ACCOMMODATION_END:
      return {
        ...state,
        loading: false,
        message: null,
        accommodationErrors: null,
      };

    default:
      return null;
  }
};
export default reducer;
