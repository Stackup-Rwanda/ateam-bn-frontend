import fetchRequestsReducer from '../../../reducers/requests';
import { requests as initialState } from '../../../store/initialState';
import { tripsActionTypes } from '../../../actionTypes';

describe('Testing fetchRequestsReducer', () => {
  it('FETCH_REQUEST', () => {
    const reducerResult = fetchRequestsReducer(
      initialState.requests,
      { type: tripsActionTypes.FETCH_REQUEST }
    );
    expect(reducerResult).toHaveProperty('loading');
    expect(reducerResult.loading).toEqual(true);
  });
  it('FETCH_REQUEST_SUCCESS', () => {
    const reducerResult = fetchRequestsReducer(
      initialState.requests,
      {
        type: tripsActionTypes.FETCH_REQUEST_SUCCESS,
        payload: {
          trips: [],
          pages: {},
          error: null,
          loading: false
        }
      }
    );
    expect(reducerResult).toHaveProperty('trips');
    expect(reducerResult).toHaveProperty('loading');
    expect(reducerResult.loading).toEqual(false);
  });
  it('FETCH_REQUEST_FAILURE', () => {
    const reducerResult = fetchRequestsReducer(
      initialState.requests,
      {
        type: tripsActionTypes.FETCH_REQUEST_FAILURE,
        payload: 'Malformed token'
      }
    );
    expect(reducerResult).toHaveProperty('trips');
    expect(reducerResult).toHaveProperty('loading');
    expect(reducerResult).toHaveProperty('error');
    expect(reducerResult.trips).toEqual([]);
    expect(reducerResult.error).toEqual('Malformed token');
  });
  it('default', () => {
    const reducerResult = fetchRequestsReducer(initialState.requests, { type: 'fake_action', payload: { error: 'failed_to_login_user' } });
    expect(reducerResult).toHaveProperty('trips');
    expect(reducerResult).toHaveProperty('loading');
    expect(reducerResult.trips).toEqual([]);
    expect(reducerResult.loading).toEqual(false);
  });
  it('default', () => {
    const reducerResult = fetchRequestsReducer(
      initialState.requests,
      { type: null, payload: null }
    );
    expect(reducerResult.trips).toEqual([]);
    expect(reducerResult.loading).toEqual(false);
  });
});
