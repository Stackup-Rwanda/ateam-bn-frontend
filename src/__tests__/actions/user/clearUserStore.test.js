import { clearUserStore } from '../../../actions/user';
import { resetPassword } from '../../../__mocks__/user';

const dispatch = jest.fn((action) => action);

describe('ClearUserStore Action', () => {
  test('should clean user store, action', async () => {
    const result = clearUserStore(resetPassword)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload).toEqual(resetPassword);
  });
});
