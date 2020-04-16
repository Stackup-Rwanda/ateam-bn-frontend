
import axios from 'axios';
import { SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, SIGNUP_VALIDATION_ERROR } from '../../actionTypes/userActionsTypes';

const signUpSuccess = (user, message) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: { user: { ...user }, message },
});

const signUpfailure = (error) => ({
  type: SIGNUP_USER_FAILURE,
  payload: { error }
});

const signUpValidationErrors = (validErrors) => ({
  type: SIGNUP_VALIDATION_ERROR,
  payload: { error: { ...validErrors } }
});

const signUpRequest = () => ({ type: SIGNUP_USER_REQUEST });

const SignUp = (data) => async (dispatch) => {
  dispatch(signUpRequest);
  try {
    // const result = await axios.post('https://ateam-bn-backend-staging.herokuapp.com/api/auth/signup', data);
    const result = await axios.post('http://localhost:3000/api/auth/signup', data);
    const { user } = result.data;
    const { message } = result.data;
    return dispatch(signUpSuccess(user, message));
  } catch (error) {
    if (error.response) {
      if (error.response.data.status === 400) {
        return dispatch(signUpValidationErrors(error.response.data.error));
      }
      return dispatch(signUpfailure(error.response.data.error));
    } return dispatch(signUpfailure('connection error! please check you internet connection'));
  }
};

export default SignUp;
