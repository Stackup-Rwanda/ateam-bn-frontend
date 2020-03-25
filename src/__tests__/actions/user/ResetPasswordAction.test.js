import { updatePassword } from '../../../actions/user';
import { resetPassword } from '../../../__mocks__/user';

const dispatch = jest.fn((action) => action);

describe('Edit profile', () => {
  test('should update a update password of a given user', async () => {
    const result = updatePassword(resetPassword, 1, 'er3545')(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(resetPassword);
  });
});
