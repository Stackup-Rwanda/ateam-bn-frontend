import oauthReducer from '../../../reducers/user';
import initialState from '../../../initialStates';
import { userActionTypes } from '../../../actionTypes';

describe('Testing oauthReducer', () => {
  it('OAUTH_SUCCESS', () => {
    const reducerResult = oauthReducer(initialState, { type: userActionTypes.OAUTH_SUCCESS, payload: { token: 'logged_in_user_token' } });
    expect(reducerResult).toHaveProperty('token');
    expect(reducerResult.token).toEqual('logged_in_user_token');
  });
  it('OAUTH_FAILURE', () => {
    const reducerResult = oauthReducer(initialState, { type: userActionTypes.OAUTH_FAILURE, payload: { error: 'failed_to_login_user' } });
    expect(reducerResult).toHaveProperty('oauthErrors');
    expect(reducerResult.oauthErrors).toEqual('failed_to_login_user');
  });
  it('default', () => {
    const reducerResult = oauthReducer(initialState, { type: 'fake_action', payload: { error: 'failed_to_login_user' } });
    expect(reducerResult).toHaveProperty('token');
    expect(reducerResult).toHaveProperty('oauthErrors');
    expect(reducerResult.token).toEqual(undefined);
    expect(reducerResult.oauthErrors).toEqual(null);
  });
  it('default', () => {
    const reducerResult = oauthReducer(undefined, { type: null, payload: null });
    expect(reducerResult.token).toEqual(undefined);
    expect(reducerResult.oauthErrors).toEqual(null);
  });
});
