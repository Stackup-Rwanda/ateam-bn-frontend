import { userActionTypes } from '../../actionTypes';

export default (state, { type }) => {
  switch (type) {
    case userActionTypes.CLEAR_USER_STORE:
      return {
        ...state,
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

    default:
      return null;
  }
};
