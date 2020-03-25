import { userActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        forgotPassword: { ...state.forgotPassword, message: '', loading: true, errors: {} }
      };
    case userActionTypes.FORGOT_PASSWORD_END:
      return {
        ...state,
        forgotPassword: { ...state.forgotPassword, message: '', loading: false, errors: {} }
      };
    case userActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: { loading: false, message: payload.message, errors: {} }
      };
    case userActionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword: {
          loading: false,
          message: '',
          errors: { message: payload.error }
        }
      };
    default:
      return null;
  }
};
