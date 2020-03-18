import { userActionTypes } from '../actionTypes';

const createAction = (payload) => {
  const { token, error, message } = payload;
  if (token) {
    localStorage.setItem('token', token);
    return { type: userActionTypes.OAUTH_SUCCESS, payload: { token } };
  } if (error) {
    return { type: userActionTypes.OAUTH_FAILURE, payload: { error } };
  }
  return { type: userActionTypes.AUTH_MESSAGE, payload: { message } };
};

export default createAction;
