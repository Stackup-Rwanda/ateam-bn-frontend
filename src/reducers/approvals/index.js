import { approvalsActionTypes as approvalsTypes } from '../../actionTypes';
import approvals from '../../store/initialState';

export default (state = approvals, { type, payload }) => {
  switch (type) {
    case approvalsTypes.FETCH_APPROVALS_START:
      return {
        ...state,
        getApprovals: { ...state.getApprovals, message: '', loading: true, errors: {} }
      };
    case approvalsTypes.FETCH_APPROVALS_SUCCESS:
      return {
        ...state,
        listOfApprovals: [...payload.data.paginate],
        Next: { ...payload.data.Next },
        Previous: { ...payload.data.Previous },
        getApprovals: {
          ...state.getApprovals,
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case approvalsTypes.FETCH_APPROVALS_END:
      return {
        ...state,
        getApprovals: { ...state.getApprovals, message: '', loading: false, errors: {} }
      };
    case approvalsTypes.FETCH_APPROVALS_FAILURE:
      return {
        ...state,
        getApprovals: {
          loading: false,
          message: '',
          errors: { ...payload.errors }
        }
      };
    default:
      return state;
  }
};
