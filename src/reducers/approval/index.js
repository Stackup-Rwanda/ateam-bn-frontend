import { approvalActionTypes as approvalTypes } from '../../actionTypes';
import approval from '../../store/initialState';

export default (state = approval, { type, payload }) => {
  switch (type) {
    case approvalTypes.FETCH_APPROVAL_START:
      return {
        ...state,
        getApproval: { ...state.getApproval, message: '', loading: true, errors: {} }
      };
    case approvalTypes.FETCH_APPROVAL_SUCCESS:
      return {
        ...state,
        approval: { ...payload.data },
        getApproval: {
          ...state.getApproval,
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case approvalTypes.FETCH_APPROVAL_END:
      return {
        ...state,
        getApproval: { ...state.getApproval }
      };
    case approvalTypes.FETCH_APPROVAL_FAILURE:
      return {
        ...state,
        getApproval: {
          loading: false,
          message: '',
          errors: { ...payload }
        }
      };
    default:
      return state;
  }
};
