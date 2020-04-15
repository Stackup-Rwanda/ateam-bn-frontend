import { approveRejectActionTypes as approveTypes } from '../../actionTypes';
import reject from '../../store/initialState';

export default (state = reject, { type, payload }) => {
  switch (type) {
    case approveTypes.REJECT_APPROVAL_START:
      return { ...state };
    case approveTypes.REJECT_APPROVAL_SUCCESS:
      return {
        ...state,
        status: payload.data.status,
        message: payload.message
      };
    case approveTypes.REJECT_APPROVAL_END:
      return { ...state };
    case approveTypes.REJECT_APPROVAL_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
