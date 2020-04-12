import {
  CREATE_ACCOMMODATION_REQUEST,
  CREATE_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_FAILURE,
  CREATE_ACCOMMODATION_END,
} from '../../actionTypes/accommodationActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_ACCOMMODATION_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        accommodationErrors: null,
      };
    case CREATE_ACCOMMODATION_SUCCESS:
      window.location.replace('/accommodations');
      return {
        ...state,
        loading: false,
        message: payload.message,
        accommodationErrors: null,
      };
    case CREATE_ACCOMMODATION_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        accommodationErrors: payload.error,
      };
    case CREATE_ACCOMMODATION_END:
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
