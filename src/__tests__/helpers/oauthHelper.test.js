import { oauthHelper } from '../../helpers';
import { userActionTypes } from '../../actionTypes';

describe('Testing oauthHelper', () => {
  test('should return a correct action when an error happens at login', () => {
    const result = oauthHelper({ token: null, error: 'email: kwizeradoddy@gmail.com, already in use' });
    expect(result).toHaveProperty('type');
    expect(result.type).toEqual(userActionTypes.OAUTH_FAILURE);
  });
  test('should return a correct action when a token is generated', () => {
    const result = oauthHelper({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInVzZXJuYW1lIjoiS2FsaW1iYUt3aXplcmFEb2RkeSIsImVtYWlsIjoia3dpemVyYWRvZGR5QGdtYWlsLmNvbSIsInJvbGUiOiJSRVFVRVNURVIiLCJpc1ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE1ODQ2NjgxNTd9.MbsbvfACd09DD-qP9iZBUBa-qrGWWLj33mBS3ciltKI',
      error: null
    });
    expect(result).toHaveProperty('type');
    expect(result.type).toEqual(userActionTypes.OAUTH_SUCCESS);
  });
});
