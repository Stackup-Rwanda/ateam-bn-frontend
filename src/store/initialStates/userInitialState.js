const userInitialState = {
  loading: false,
  loginErrors: null,
  token: localStorage.token,
  oauthErrors: null,
  profile: localStorage.profile,
  isAuth: localStorage.isAuth,
  signedUp: false,
  validErrors: {},
  signUpErrors: '',
  message: '',
  authMessage: '',
  forgotPassword: {
    loading: false,
    message: '',
    errors: {}
  },
  updatePassword: {
    loading: false,
    message: '',
    errors: {}
  }
};
export default userInitialState;
