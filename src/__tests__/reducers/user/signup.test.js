import initialState from '../../../store/initialStates/userInitialState';
import { userActionTypes } from '../../../actionTypes';
import signupReducer from '../../../reducers/user';

describe('Testing signUp Reducer', () => {
  it('SIGNUP LOADING', () => {
    const reducerResult = signupReducer(
      initialState,
      { type: userActionTypes.SIGNUP_USER_REQUEST }
    );
    expect(reducerResult).toHaveProperty('loading');
  });
  it('SIGNUP SUCCESS', () => {
    const user = {
      name: 'karen',
      gender: 'Female',
      email: 'kgiramata57@gmail.com',
      username: 'karen',
      password: 'karen126',
      passportId: '12345678',
      birthdate: '2002-07-02',
      department: 'Construction'
    };
    const reducerResult = signupReducer(initialState, {
      type: userActionTypes.SIGNUP_USER_SUCCESS,
      payload: { user, message: 'User was created successfully, Verify your email to confirm registration' }
    });
    expect(reducerResult).toHaveProperty('user');
    expect(reducerResult.message).toEqual('User was created successfully, Verify your email to confirm registration');
  });
  it('SIGNUP FAILURE', () => {
    const reducerResult = signupReducer(initialState, {
      type: userActionTypes.SIGNUP_USER_FAILURE,
      payload: { error: 'This user already exists, use another email or username' }
    });
    expect(reducerResult).toHaveProperty('signUpErrors');
    expect(reducerResult.signUpErrors).toEqual('This user already exists, use another email or username');
  });
  it('SIGNUP VALIDATION FAILURE', () => {
    const reducerResult = signupReducer(initialState, {
      type: userActionTypes.SIGNUP_VALIDATION_ERROR,
      payload: { error: 'Please enter your name' }
    });
    expect(reducerResult).toHaveProperty('validErrors');
    expect(reducerResult.validErrors).toEqual('Please enter your name');
  });
});
