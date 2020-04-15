import rejectReducer from '../../../reducers/approval/reject';
import initialState from '../../../store/initialState';
import { approveRejectActionTypes as rejectTypes } from '../../../actionTypes';
import { payload, errors } from '../../../__mocks__/approvals';

describe('Testing approvalsReducer', () => {
  it('REJECT_APPROVAL_START', () => {
    const result = rejectReducer(
      initialState.approval,
      { type: rejectTypes.REJECT_APPROVAL_START }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(true);
  });

  it('REJECT_APPROVAL_SUCCESS', () => {
    const result = rejectReducer(
      initialState.approval,
      {
        type: rejectTypes.REJECT_APPROVAL_SUCCESS,
        payload
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('REJECT_APPROVAL_FAILURE', () => {
    const result = rejectReducer(
      initialState.approval,
      {
        type: rejectTypes.REJECT_APPROVAL_FAILURE,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('REJECT_APPROVAL_END', () => {
    const result = rejectReducer(
      initialState.approval,
      {
        type: rejectTypes.REJECT_APPROVAL_END,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });
});
