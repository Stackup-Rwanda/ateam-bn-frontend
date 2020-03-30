import { userActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.OAUTH_SUCCESS:
      return {
        ...state,
        oauthErrors: null,
        token: payload.token
      };
    case userActionTypes.OAUTH_FAILURE:
      return {
        ...state,
        oauthErrors: payload.error
      };
    case userActionTypes.AUTH_MESSAGE:
      return {
        ...state,
        authMessage: payload.message
      };
    default:
      return null;
  }
};
