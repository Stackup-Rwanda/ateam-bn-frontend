import { userActionTypes } from '../actionTypes';

const createAction = (payload) => {
  const { token, error } = payload;
  if (token) {
    localStorage.setItem('token', token);
    return { type: userActionTypes.OAUTH_SUCCESS, payload: { token } };
  }
  return { type: userActionTypes.OAUTH_FAILURE, payload: { error } };
};

export default createAction;
