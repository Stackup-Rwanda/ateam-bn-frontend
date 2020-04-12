import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST
} from '../../actionTypes/userActionsTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        loginErrors: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        loginErrors: null
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        loginErrors: payload.error
      };
    default:
      return null;
  }
};
export default reducer;
