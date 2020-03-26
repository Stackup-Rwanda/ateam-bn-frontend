import { userActionTypes } from '../actionTypes';

const createAction = (payload) => {
  const { token, username, error } = payload;
  if (token) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    return { type: userActionTypes.OAUTH_SUCCESS, payload: { token } };
  }
  return { type: userActionTypes.OAUTH_FAILURE, payload: { error } };
};

export default createAction;
