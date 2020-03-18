import mockAxios from 'axios';
import { login } from '../../../actions';
import store from '../../../__mocks__/store';
import { rejectedLoginRequest } from '../../../__mocks__/axios';

describe('Login Component', () => {
  it('should dispatch success action', async () => {
    const request = {
      data: { token: 'generatedToken' },
      status: 200
    };
    const user = {
      email: 'manzi@gmail.com',
      password: 'manzi123'
    };
    mockAxios.post.mockResolvedValueOnce({ request, data: { data: { token: 'value' } } });
    const result = await store.dispatch(login(user));
    expect(result.payload).toHaveProperty('token');
  });
  it('should dispatch failure action', async () => {
    mockAxios.post.mockRejectedValueOnce(rejectedLoginRequest);
    const result = await store.dispatch(login());
    expect(result.payload).toHaveProperty('error');
  });
});
