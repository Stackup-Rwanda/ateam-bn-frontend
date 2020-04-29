import {
  EDIT_ACCOMMODATION_END,
  EDIT_ACCOMMODATION_START,
  EDIT_ACCOMMODATION_FAILURE,
  EDIT_ACCOMMODATION_SUCCESS,
} from '../../actionTypes/accommodationActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case EDIT_ACCOMMODATION_START:
      return {
        ...state,
        loading: true,
        message: null,
        accommodationErrors: null,
      };
    case EDIT_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        accommodationErrors: null,
      };
    case EDIT_ACCOMMODATION_FAILURE:
      return {
        ...state,
        loading: false,
        message: null,
        accommodationErrors: payload.error,
      };
    case EDIT_ACCOMMODATION_END:
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
