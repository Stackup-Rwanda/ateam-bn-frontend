import { approveRejectActionTypes as approveTypes } from '../../actionTypes';
import { BASE_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

export const approveApproval = (id) => (dispatch) => dispatch(apiAction({
  data: { status: 'Approved' },
  method: 'patch',
  httpOptions: { token: localStorage.token },
  url: `${BASE_URL}/request/${id}/approve`,
  onStart: approveTypes.APPROVE_APPROVAL_START,
  onEnd: approveTypes.APPROVE_APPROVAL_END,
  onSuccess: approveTypes.APPROVE_APPROVAL_SUCCESS,
  onFailure: approveTypes.APPROVE_APPROVAL_FAILURE
}));
