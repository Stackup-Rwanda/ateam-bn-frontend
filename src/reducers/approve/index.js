import { approveRejectActionTypes as approveTypes } from '../../actionTypes';
import approve from '../../store/initialState';

export default (state = approve, { type, payload }) => {
  switch (type) {
    case approveTypes.APPROVE_APPROVAL_START:
      return { ...state };
    case approveTypes.APPROVE_APPROVAL_SUCCESS:
      return {
        ...state,
        status: payload.data.status,
        message: payload.message
      };
    case approveTypes.APPROVE_APPROVAL_END:
      return { ...state };
    case approveTypes.APPROVE_APPROVAL_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
