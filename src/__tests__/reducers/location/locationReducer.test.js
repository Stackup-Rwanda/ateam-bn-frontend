import fetchLocationsReducer from '../../../reducers/location/fetchLocationsReducer';
import initialState from '../../../store/initialState';
import { locationActionTypes } from '../../../actionTypes';

describe('Fetch Location reducer', () => {
  test('FETCH_LOCATIONS_START', () => {
    const reducer = fetchLocationsReducer(initialState, {
      type: locationActionTypes.FETCH_LOCATIONS_START,
      payload: { loading: true }
    });
    expect(reducer.locations).toHaveProperty('loading');
    expect(reducer.locations.loading).toBeTruthy();
  });

  test('FETCH_LOCATIONS_SUCCESSFULLY', () => {
    const reducer = fetchLocationsReducer(initialState, {
      type: locationActionTypes.FETCH_LOCATIONS_SUCCESS,
      payload: { message: 'done well', data: { paginate: [] } }
    });
    expect(reducer.locations).toHaveProperty('message');
  });

  test('FETCH_LOCATIONS_ERROR', () => {
    const reducer = fetchLocationsReducer(initialState, {
      type: locationActionTypes.FETCH_LOCATIONS_FAILURE,
      payload: { errors: { message: '----------' } }
    });
    expect(reducer.locations.errors).toHaveProperty('message');
  });

  test('FETCH_LOCATIONS_END', () => {
    const reducer = fetchLocationsReducer(initialState, {
      type: locationActionTypes.FETCH_LOCATIONS_END,
      payload: { loading: false }
    });

    expect(reducer.locations).toHaveProperty('loading');
    expect(reducer.locations.loading).toBeFalsy();
  });
});
