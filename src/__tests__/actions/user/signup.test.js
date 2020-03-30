import mockAxios from 'axios';
import SignUp from '../../../actions/user/signup';
import store from '../../../__mocks__/store';
import { badRequest, conflict } from '../../../__mocks__/axios';

describe('user signup action', () => {
  it('should receive message', async () => {
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
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { message: 'message' } });
    const result = await store.dispatch(SignUp(user));
    expect(result.payload.message).toEqual('message');
  });
  it('should receive validation erorrs', async () => {
    mockAxios.post.mockRejectedValueOnce(badRequest);
    const result = await store.dispatch(SignUp());
    expect(result.payload.error.name).toEqual('Please enter your name');
  });
  it('should receive other errors', async () => {
    mockAxios.post.mockRejectedValueOnce(conflict);
    const result = await store.dispatch(SignUp());
    expect(result.payload.error).toEqual('This user already exists, use another email or username');
  });
});
