import { user as initialState } from '../../store/initialState';
import clearUserStoreReducer from './clearUserStoreReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import oauthReducer from './oauthReducer';
import loginReducer from './loginReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const login = loginReducer(state, action);
  const oauth = oauthReducer(state, action);
  const forgotPassword = forgotPasswordReducer(state, action);
  const updatePassword = updatePasswordReducer(state, action);
  return (
    clearUserStore
      || oauth
      || forgotPassword
      || updatePassword
      || login
      || state
  );
};
