import clearUserStoreReducer from '../../../reducers/user/clearUserStoreReducer';
import { user as initialState } from '../../../store/initialState';
import { userActionTypes } from '../../../actionTypes';

describe('cleanUserStore reducer', () => {
  test('CLEAR_USER_STORE', () => {
    const reducer = clearUserStoreReducer(
      initialState,
      { type: userActionTypes.CLEAR_USER_STORE }
    );
    expect(reducer).toHaveProperty('forgotPassword');
  });
});
