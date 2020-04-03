import { userActionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.GET_USERS_START:
      return {
        ...state,
        getUsers: { ...state.getUsers, message: '', loading: true, errors: {} }
      };
    case userActionTypes.GET_USERS_END:
      return {
        ...state,
        getUsers: { ...state.getUsers, message: '', loading: false, errors: {} }
      };
    case userActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        listOfUsers: [...payload.data.paginate],
        Next: { ...payload.data.Next },
        Previous: { ...payload.data.Previous },
        getUsers: {
          ...state.getUsers,
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case userActionTypes.GET_USERS_FAIL:
      return {
        ...state,
        getUsers: {
          loading: false,
          message: '',
          errors: { ...payload.errors }
        }
      };
    default:
      return null;
  }
};
