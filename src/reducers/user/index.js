// eslint-disable-next-line import/no-named-as-default-member
import initialState from '../../store/initialState';
import clearUserStoreReducer from './clearUserStoreReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import oauthReducer from './oauthReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import assignUserRole from './assignUserRole';
import getUsersReducer from './getUsersReducer';
import logoutReducer from './logoutReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);
  const oauth = oauthReducer(state, action);
  const forgotPassword = forgotPasswordReducer(state, action);
  const updatePassword = updatePasswordReducer(state, action);
  const getUsers = getUsersReducer(state, action);
  const assignRole = assignUserRole(state, action);
  const logout = logoutReducer(state, action);
  return (
    clearUserStore
      || forgotPassword
      || updatePassword
      || signup
      || login
      || getUsers
      || assignRole
      || oauth
      || logout
      || state
  );
};
