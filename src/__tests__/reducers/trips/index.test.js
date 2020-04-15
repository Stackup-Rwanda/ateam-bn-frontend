import requestReducer from '../../../reducers/trips';
import initialState from '../../../store/initialState';
import { tripsActionTypes as tripsTypes } from '../../../actionTypes';
import { payload, errors } from '../../../__mocks__/approvals';

describe('Testing requestReducer', () => {
  it('FETCH_REQUEST_START', () => {
    const result = requestReducer(
      initialState.requests,
      { type: tripsTypes.FETCH_REQUEST_START }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(true);
  });

  it('FETCH_REQUEST_SUCCESS', () => {
    const result = requestReducer(
      initialState.requests,
      {
        type: tripsTypes.FETCH_REQUEST_SUCCESS,
        payload
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_REQUEST_FAILURE', () => {
    const result = requestReducer(
      initialState.requests,
      {
        type: tripsTypes.FETCH_REQUEST_FAILURE,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });

  it('FETCH_REQUEST_END', () => {
    const result = requestReducer(
      initialState.requests,
      {
        type: tripsTypes.FETCH_REQUEST_END,
        payload: errors
      }
    );
    expect(result).toHaveProperty('loading');
    expect(result.loading).toEqual(false);
  });
});
