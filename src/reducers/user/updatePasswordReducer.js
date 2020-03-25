import { userActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        updatePassword: { ...state.updatePassword, message: '', loading: true, errors: {} }
      };
    case userActionTypes.RESET_PASSWORD_END:
      return {
        ...state,
        updatePassword: { ...state.updatePassword, message: '', loading: false, errors: {} }
      };
    case userActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        updatePassword: { loading: true, message: payload.message, errors: {} }
      };
    case userActionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        updatePassword: {
          loading: false,
          message: '',
          errors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
