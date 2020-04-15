import { approveRejectActionTypes as approveTypes } from '../../actionTypes';
import approve from '../../store/initialState';

export default (state = approve, { type, payload }) => {
  switch (type) {
    case approveTypes.APPROVE_APPROVAL_START:
      return {
        ...state,
        loading: true,
        getApproval: { ...state.getApproval, message: '', loading: true, errors: {} }
      };
    case approveTypes.APPROVE_APPROVAL_SUCCESS:
      return {
        ...state,
        message: payload.message,
        loading: false,
        approval: { ...payload.data },
        getApproval: {
          ...state.getApproval,
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case approveTypes.APPROVE_APPROVAL_END:
      return {
        ...state,
        getApproval: { ...state.getApproval }
      };
    case approveTypes.APPROVE_APPROVAL_FAILURE:
      return {
        ...state,
        getApproval: {
          loading: false,
          message: '',
          errors: { ...payload }
        }
      };
    default:
      return null;
  }
};
