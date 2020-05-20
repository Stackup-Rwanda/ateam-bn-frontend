const initState = {
  loading: false,
  trips: [],
  Next: {},
  Previous: {},
  errors: {},
  searchErrors: 'null',
  message: '',
  rememberMe: {
    loading: false,
    errors: {},
    message: '',
  },
  rememberMeData: {
    loading: false,
    userData: { rememberMe: false },
    errors: {},
    message: '',
  }
};

export default initState;
