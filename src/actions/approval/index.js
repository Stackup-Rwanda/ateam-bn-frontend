import { approvalActionTypes as approvalTypes } from '../../actionTypes';
import { BASE_URL } from '../../helpers/backendURLs';
import { apiAction } from '../../helpers';

export const getApproval = (id) => (dispatch) => dispatch(apiAction({
  method: 'get',
  httpOptions: { token: localStorage.token },
  url: `${BASE_URL}/trips/${id}`,
  onStart: approvalTypes.FETCH_APPROVAL_START,
  onEnd: approvalTypes.FETCH_APPROVAL_END,
  onSuccess: approvalTypes.FETCH_APPROVAL_SUCCESS,
  onFailure: approvalTypes.FETCH_APPROVAL_FAILURE
}));
