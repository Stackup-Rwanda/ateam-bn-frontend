import store from '../../../__mocks__/store';
import { oauthActions } from '../../../actions';

describe('Testing oauthActions', () => {
  it('should dipatch failure', async () => {
    const result = await store.dispatch(oauthActions({ token: null, error: 'email already in use' }));
    expect(result).toHaveProperty('type');
  });
  it('should dipatch success', async () => {
    const result = await store.dispatch(oauthActions({ token: 'token', error: null }));
    expect(result).toHaveProperty('type');
  });
});
