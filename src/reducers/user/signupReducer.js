import { SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, SIGNUP_VALIDATION_ERROR } from '../../actionTypes/userActionsTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        user: payload.user,
        signedUp: true
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        signUpErrors: payload.error
      };
    case SIGNUP_VALIDATION_ERROR:
      return {
        ...state,
        loading: false,
        validErrors: payload.error
      };
    default:
      return null;
  }
};

export default reducer;
