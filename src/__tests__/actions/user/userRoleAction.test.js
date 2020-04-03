import adminGetUsers from '../../../actions/user/adminGetUserAction';
import assingnUserRole from '../../../actions/user/AssignUserRoleAction';

const role = 'manager';
const dispatch = jest.fn((action) => action);

describe('get users Action', () => {
  test('should list of all users', async () => {
    const result = adminGetUsers()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(null);
  });
});
describe('chnge user users Actions', () => {
  test('should change users role', async () => {
    const result = assingnUserRole(role)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data.role).toEqual(role);
  });
});
