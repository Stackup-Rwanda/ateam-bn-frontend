import { approveRejectActionTypes as approveTypes } from '../../actionTypes';
import { BASE_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

export const rejectApproval = (id) => (dispatch) => dispatch(apiAction({
  data: { status: 'Rejected' },
  method: 'patch',
  httpOptions: { token: localStorage.token },
  url: `${BASE_URL}/request/${id}/reject`,
  onStart: approveTypes.REJECT_APPROVAL_START,
  onEnd: approveTypes.REJECT_APPROVAL_END,
  onSuccess: approveTypes.REJECT_APPROVAL_SUCCESS,
  onFailure: approveTypes.REJECT_APPROVAL_FAILURE
}));
