import { userActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGOUT_START:
      return {
        ...state,
        logout: { ...state.logout, loading: true }
      };
    case userActionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      window.location.replace('/login');
      return {
        ...state,
        token: undefined,
        logout: { ...state.logout, logoutErrors: {}, message: payload.message }
      };
    case userActionTypes.LOGOUT_FAILURE:
      localStorage.removeItem('token');
      window.location.replace('/login');
      return {
        ...state,
        logout: { ...state.logout, logoutErrors: payload, message: '' }
      };
    case userActionTypes.LOGOUT_END:
      return {
        ...state,
        logout: { ...state.logout, loading: false }
      };
    default:
      return null;
  }
};
