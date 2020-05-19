import approvalReducer from '../../../reducers/approval/approval';
import initialState from '../../../store/initialState';
import { approvalActionTypes as approvalTypes } from '../../../actionTypes';
import { payload, errors } from '../../../__mocks__/approvals';

describe('Testing approvalsReducer', () => {
  it('FETCH_APPROVAL_START', () => {
    const result = approvalReducer(
      initialState.approval,
      { type: approvalTypes.FETCH_APPROVAL_START }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(true);
  });

  it('FETCH_APPROVAL_SUCCESS', () => {
    const result = approvalReducer(
      initialState.approval,
      {
        type: approvalTypes.FETCH_APPROVAL_SUCCESS,
        payload
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_APPROVAL_FAILURE', () => {
    const result = approvalReducer(
      initialState.approval,
      {
        type: approvalTypes.FETCH_APPROVAL_FAILURE,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_APPROVAL_END', () => {
    const result = approvalReducer(
      initialState.approval,
      {
        type: approvalTypes.FETCH_APPROVAL_END,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });
});
