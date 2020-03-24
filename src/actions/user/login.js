import axios from 'axios';
import { backendURLs } from '../../helpers/index';
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST
} from '../../actionTypes/userActionsTypes';

export const loginSuccess = (token) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { token }
});
export const loginFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: { error }
});
export const loginRequest = () => ({ type: LOGIN_USER_REQUEST });

export const login = (data) => async (dispatch) => {
  dispatch(loginRequest);
  try {
    const res = await axios.post(
      backendURLs.LOGIN_URL,
      data
    );
    const { token } = res.data.data;
    localStorage.setItem('token', token);
    return dispatch(loginSuccess(token));
  } catch (error) {
    return dispatch(loginFailure(error.response.data.error));
  }
};
export default { login, loginSuccess, loginFailure };
