import initialState from '../../../initialStates';
import { userActionTypes } from '../../../actionTypes';
import loginReducer from '../../../reducers/user';

describe('Testing Login Reducer', () => {
  it('LOGIN LOADING', () => {
    const reducerResult = loginReducer(initialState, { type: userActionTypes.LOGIN_USER_REQUEST });
    expect(reducerResult).toHaveProperty('token');
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
      payload: { error: 'password or email incorrect' }
    });
    expect(reducerResult).toHaveProperty('loginErrors');
    expect(reducerResult.loginErrors).toEqual('password or email incorrect');
  });
  it('default', () => {
    const reducerResult = loginReducer(initialState, {
      type: 'fake_action',
      payload: { error: 'failed_to_login_user' }
    });
    expect(reducerResult).toHaveProperty('token');
    expect(reducerResult).toHaveProperty('loginErrors');
    expect(reducerResult.token).toEqual(undefined);
    expect(reducerResult.loginErrors).toEqual(null);
  });
  it('default', () => {
    const reducerResult = loginReducer(undefined, {
      type: null,
      payload: null
    });
    expect(reducerResult.token).toEqual(undefined);
    expect(reducerResult.loginErrors).toEqual(null);
  });
});
