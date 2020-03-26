// eslint-disable-next-line import/named
import initialState from '../../../store/initialState';
import { userActionTypes } from '../../../actionTypes';
import loginReducer from '../../../reducers/user';

describe('Testing Login Reducer', () => {
  it('LOGIN LOADING', () => {
    const reducerResult = loginReducer(initialState, { type: userActionTypes.LOGIN_USER_REQUEST });
    expect(reducerResult.user).toHaveProperty('loading');
  });
  it('LOGIN SUCCESS', () => {
    const reducerResult = loginReducer(initialState, {
      type: userActionTypes.LOGIN_USER_SUCCESS,
      payload: { token: 'token' }
    });
    expect(reducerResult).toHaveProperty('token');
  });
  it('LOGIN FAILURE', () => {
    const reducerResult = loginReducer(initialState, {
      type: userActionTypes.LOGIN_USER_FAILURE,
      payload: { error: 'password or email is incorrect' }
    });
    expect(reducerResult).toHaveProperty('loginErrors');
    expect(reducerResult.loginErrors).toEqual('password or email is incorrect');
  });
});
