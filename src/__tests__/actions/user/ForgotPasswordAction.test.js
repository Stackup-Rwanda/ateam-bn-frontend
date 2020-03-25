import { forgotPassword } from '../../../actions/user';
import { sendEmail } from '../../../__mocks__/user';

const dispatch = jest.fn((action) => action);

describe('Send Email Action', () => {
  test('should send email to a given user email', async () => {
    const result = forgotPassword(sendEmail)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data.email).toEqual(sendEmail);
  });
});
