import { tripsActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case tripsActionTypes.CREATE_TRIP_START:
      return {
        ...state,
        loading: true,
        errors: {},
        message: ''
      };
    case tripsActionTypes.CREATE_TRIP_END:
      return {
        ...state,
        loading: false,
        errors: {},
        message: ''
      };
    case tripsActionTypes.CREATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        errors: {}
      };
    case tripsActionTypes.CREATE_TRIP_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        errors: { message: payload.error }
      };
    case tripsActionTypes.EDIT_TRIP_START:
      return {
        ...state,
        loading: true,
        errors: {},
        message: ''
      };
    case tripsActionTypes.EDIT_TRIP_END:
      return {
        ...state,
        loading: false,
        errors: {},
        message: ''
      };
    case tripsActionTypes.EDIT_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        errors: {}
      };
    case tripsActionTypes.EDIT_TRIP_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        errors: { message: payload.error }
      };
    default:
      return null;
  }
};
