import createTripRequestReducer from '../../../reducers/trips/createTripRequestReducer';
import initialState from '../../../store/initialState';
import { tripsActionTypes } from '../../../actionTypes';

describe('Create Trip reducer', () => {
  test('CREATE_TRIP_START', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.CREATE_TRIP_START,
      payload: { loading: true }
    });
    expect(reducer).toHaveProperty('loading');
    expect(reducer.loading).toBeTruthy();
  });

  test('CREATE_TRIP_SUCCESSFULLY', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.CREATE_TRIP_SUCCESS,
      payload: { message: 'done well' }
    });
    expect(reducer).toHaveProperty('message');
  });

  test('CREATE_TRIP_ERROR', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.CREATE_TRIP_FAILURE,
      payload: { errors: { message: '----------' } }
    });
    expect(reducer.errors).toHaveProperty('message');
  });

  test('CREATE_TRIP_END', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.CREATE_TRIP_END,
      payload: { loading: false }
    });

    expect(reducer).toHaveProperty('loading');
    expect(reducer.loading).toBeFalsy();
  });

  test('EDIT_TRIP_START', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.EDIT_TRIP_START,
      payload: { loading: true }
    });
    expect(reducer).toHaveProperty('loading');
    expect(reducer.loading).toBeTruthy();
  });

  test('EDIT_TRIP_SUCCESSFULLY', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.EDIT_TRIP_SUCCESS,
      payload: { message: 'done well' }
    });
    expect(reducer).toHaveProperty('message');
  });

  test('EDIT_TRIP_ERROR', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.EDIT_TRIP_FAILURE,
      payload: { errors: { message: 'error' } }
    });
    expect(reducer).toHaveProperty('errors');
  });

  test('EDIT_TRIP_END', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: tripsActionTypes.EDIT_TRIP_END,
      payload: { loading: false }
    });

    expect(reducer).toHaveProperty('loading');
    expect(reducer.loading).toBeFalsy();
  });
});
