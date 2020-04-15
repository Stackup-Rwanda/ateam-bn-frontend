import { approvalsActionTypes as approvalsTypes } from '../../actionTypes';
import { BASE_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

export const getAllApprovals = (page = 1, limit = 10) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${BASE_URL}/trips?page=${page}&limit=${limit}`,
  onStart: approvalsTypes.FETCH_APPROVALS_START,
  onEnd: approvalsTypes.FETCH_APPROVALS_END,
  onSuccess: approvalsTypes.FETCH_APPROVALS_SUCCESS,
  onFailure: approvalsTypes.FETCH_APPROVALS_FAILURE
}));
