// eslint-disable-next-line import/named
import { user as initialState } from '../../../store/initialState';
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
    expect(reducerResult.user).toHaveProperty('token');
  });
  it('LOGIN FAILURE', () => {
    const reducerResult = loginReducer(initialState, {
      type: userActionTypes.LOGIN_USER_FAILURE,
      payload: { error: 'password or email is incorrect' }
    });
    expect(reducerResult.user).toHaveProperty('loginErrors');
  });
  it('default', () => {
    const reducerResult = loginReducer(initialState, {
      type: 'fake_action',
      payload: { error: 'failed_to_login_user' }
    });
    expect(reducerResult.user).toHaveProperty('token');
    expect(reducerResult.user).toHaveProperty('loginErrors');
    expect(reducerResult.user.token).toEqual(undefined);
    expect(reducerResult.user.oauthErrors).toEqual(null);
  });
  it('Default', () => {
    const reducerResult = loginReducer(undefined, {
      type: null,
      payload: null
    });
    expect(reducerResult.user.token).toEqual(undefined);
    expect(reducerResult.user.loginErrors).toEqual(null);
  });
});
