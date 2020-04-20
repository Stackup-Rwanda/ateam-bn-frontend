import statsReducer from '../../../reducers/stats';
import initialState from '../../../store/initialState';
import stats from '../../../__mocks__/stats';
import { tripsActionTypes } from '../../../actionTypes';

describe('get stats reducer', () => {
  test('GET_STATS_START', () => {
    const reducer = statsReducer(initialState, {
      type: tripsActionTypes.GET_STATS_START,
      payload: { loading: true }
    });

    expect(reducer.getStats).toHaveProperty('loading');
    expect(reducer.getStats.loading).toBeTruthy();
  });
  test('GET_STATS_SUCCESS', () => {
    const reducer = statsReducer(initialState, {
      type: tripsActionTypes.GET_STATS_SUCCESS,
      payload: { data: stats }
    });

    expect(reducer.listOfStats).toEqual(stats);
    expect(reducer.listOfStats).toHaveProperty('approved');
    expect(reducer.listOfStats).toHaveProperty('pending');
    expect(reducer.listOfStats).toHaveProperty('rejected');
  });
  test('GET_STATS_FAIL', () => {
    const reducer = statsReducer(initialState, {
      type: tripsActionTypes.GET_STATS_FAIL,
      payload: { statsErrors: { message: '----------' } }
    });

    expect(reducer.getStats.statsErrors).toHaveProperty('message');
  });
  test('GET_STATS_END', () => {
    const reducer = statsReducer(initialState, {
      type: tripsActionTypes.GET_STATS_END,
      payload: { loading: false }
    });

    expect(reducer.getStats).toHaveProperty('loading');
    expect(reducer.getStats.loading).toBeFalsy();
  });
});
