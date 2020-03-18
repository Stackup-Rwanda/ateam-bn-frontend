module.exports = {
  token: localStorage.token,
  oauthErrors: null,
  profile: localStorage.profile,
  isAuth: localStorage.isAuth,
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
