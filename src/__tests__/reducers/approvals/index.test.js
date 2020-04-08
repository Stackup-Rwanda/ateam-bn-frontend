import approvalsReducer from '../../../reducers/approvals';
import initialState from '../../../store/initialState';
import { approvalsActionTypes as approvalsTypes } from '../../../actionTypes';
import { payload, errors } from '../../../__mocks__/approvals';

describe('Testing approvalsReducer', () => {
  it('FETCH_APPROVALS_START', () => {
    const result = approvalsReducer(
      initialState.approvals,
      { type: approvalsTypes.FETCH_APPROVALS_START }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_APPROVALS_SUCCESS', () => {
    const result = approvalsReducer(
      initialState.approvals,
      {
        type: approvalsTypes.FETCH_APPROVALS_SUCCESS,
        payload
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_APPROVALS_FAILURE', () => {
    const result = approvalsReducer(
      initialState.approvals,
      {
        type: approvalsTypes.FETCH_APPROVALS_FAILURE,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_APPROVALS_END', () => {
    const result = approvalsReducer(
      initialState.approvals,
      {
        type: approvalsTypes.FETCH_APPROVALS_END,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });
});
