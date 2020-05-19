import approveReducer from '../../../reducers/approval/approve';
import initialState from '../../../store/initialState';
import { approveRejectActionTypes as approveTypes } from '../../../actionTypes';
import { payload, errors } from '../../../__mocks__/approvals';

describe('Testing approvalsReducer', () => {
  it('APPROVE_APPROVAL_START', () => {
    const result = approveReducer(
      initialState.approval,
      { type: approveTypes.APPROVE_APPROVAL_START }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(true);
  });

  it('APPROVE_APPROVAL_SUCCESS', () => {
    const result = approveReducer(
      initialState.approval,
      {
        type: approveTypes.APPROVE_APPROVAL_SUCCESS,
        payload
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('APPROVE_APPROVAL_FAILURE', () => {
    const result = approveReducer(
      initialState.approval,
      {
        type: approveTypes.APPROVE_APPROVAL_FAILURE,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('APPROVE_APPROVAL_END', () => {
    const result = approveReducer(
      initialState.approval,
      {
        type: approveTypes.APPROVE_APPROVAL_END,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });
});
