import { userActionTypes } from '../../actionTypes';
// eslint-disable-next-line linebreak-style

export default (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.ADMIN_EDIT_ROLE_START:
      return {
        ...state,
        editRole: { ...state.editRole, message: '', loading: true, errors: {} }
      };
    case userActionTypes.ADMIN_EDIT_ROLE_END:
      return {
        ...state,
        editRole: { ...state.editRole, loading: false }
      };
    case userActionTypes.ADMIN_EDIT_ROLE_SUCCESS:
      return {
        ...state,
        editRole: { loading: false, message: payload.message, errors: {} }
      };
    case userActionTypes.ADMIN_EDIT_ROLE_FAIL:
      return {
        ...state,
        editRole: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};
