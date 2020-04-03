import getUsersReducer from '../../../reducers/user/getUsersReducer';
import assignUserRoleReducer from '../../../reducers/user/assignUserRole';
import initialState from '../../../store/initialState';
import { userActionTypes } from '../../../actionTypes';
import user from '../../../__mocks__/user';

describe('get users reducer', () => {
  test('GET_USERS_START', () => {
    const reducer = getUsersReducer(initialState, {
      type: userActionTypes.GET_USERS_START,
      payload: { loading: true }
    });

    expect(reducer.getUsers).toHaveProperty('loading');
    expect(reducer.getUsers.loading).toBeTruthy();
  });
  test('GET_USERS_SUCCESS', () => {
    const reducer = getUsersReducer(initialState, {
      type: userActionTypes.GET_USERS_SUCCESS,
      payload: { data: { paginate: [user] } }
    });

    expect(reducer.listOfUsers[0]).toEqual(user);
    expect(reducer.listOfUsers[0]).toHaveProperty('id');
    expect(reducer.listOfUsers[0]).toHaveProperty('Name');
    expect(reducer.listOfUsers[0]).toHaveProperty('username');
    expect(reducer.listOfUsers[0]).toHaveProperty('lineManager');
    expect(reducer.listOfUsers[0]).toHaveProperty('role');
  });

  test('GET_USERS_FAILURE', () => {
    const reducer = getUsersReducer(initialState, {
      type: userActionTypes.GET_USERS_FAIL,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.getUsers.errors).toHaveProperty('user');
    expect(reducer.getUsers.errors.user).toEqual('user does not exist');
  });


  test('GET_USERS_END', () => {
    const reducer = getUsersReducer(initialState, {
      type: userActionTypes.GET_USERS_END,
      payload: { loading: false }
    });

    expect(reducer.getUsers).toHaveProperty('loading');
    expect(reducer.getUsers.loading).toBeFalsy();
  });
});

describe('admin edit role reducer', () => {
  test('ADMIN_EDIT_ROLE_START', () => {
    const reducer = assignUserRoleReducer(initialState, {
      type: userActionTypes.ADMIN_EDIT_ROLE_START,
      payload: { loading: true }
    });

    expect(reducer.editRole).toHaveProperty('loading');
    expect(reducer.editRole.loading).toBeTruthy();
  });
  test('ADMIN_EDIT_ROLE_SUCCESS', () => {
    const reducer = assignUserRoleReducer(initialState, {
      type: userActionTypes.ADMIN_EDIT_ROLE_SUCCESS,
      payload: { user }
    });

    expect(reducer.editRole).toHaveProperty('errors', 'loading', 'message');
  });
  test('ADMIN_EDIT_ROLE_FAIL', () => {
    const reducer = assignUserRoleReducer(initialState, {
      type: userActionTypes.ADMIN_EDIT_ROLE_FAIL,
      payload: { errors: { user: 'user does not exist' } }
    });

    expect(reducer.editRole.errors).toHaveProperty('user');
    expect(reducer.editRole.errors.user).toEqual('user does not exist');
  });
  test('ADMIN_EDIT_ROLE_END', () => {
    const reducer = assignUserRoleReducer(initialState, {
      type: userActionTypes.ADMIN_EDIT_ROLE_END,
      payload: { loading: false }
    });

    expect(reducer.editRole).toHaveProperty('loading');
    expect(reducer.editRole.loading).toBeFalsy();
  });
});
