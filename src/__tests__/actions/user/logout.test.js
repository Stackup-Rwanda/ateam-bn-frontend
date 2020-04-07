import { logout } from '../../../actions/user';
import { LOGOUT_URL } from '../../../helpers/backendURLs';

const dispatch = jest.fn((action) => action);

describe('logout action', () => {
    test('should dispatch a correct action', async () => {
      const result = logout()(dispatch);
      expect(result).toHaveProperty('type');
      expect(result.type).toEqual('API_REQUEST');
      expect(result).toHaveProperty('payload');
      expect(result.payload).toHaveProperty('httpOptions');
      expect(result.payload.httpOptions).toHaveProperty('URL');
      expect(result.payload.httpOptions.URL).toBe(LOGOUT_URL);
    });
  });