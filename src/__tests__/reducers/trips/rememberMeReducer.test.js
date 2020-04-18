import createTripRequestReducer from '../../../reducers/trips/rememberMeReducer';
import initialState from '../../../store/initialState';
import { rememberMeActionTypes } from '../../../actionTypes';

describe('RememberMe reducer', () => {
  test('FETCH_REMEMBERME_DATA_START', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.FETCH_REMEMBERME_DATA_START,
      payload: { loading: true }
    });
    expect(reducer.rememberMeData).toHaveProperty('loading');
    expect(reducer.rememberMeData.loading).toBeTruthy();
  });

  test('FETCH_REMEMBERME_DATA_SUCCESS', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.FETCH_REMEMBERME_DATA_SUCCESS,
      payload: { message: 'done well' }
    });
    expect(reducer.rememberMeData).toHaveProperty('message');
  });

  test('FETCH_REMEMBERME_DATA_FAILURE', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.FETCH_REMEMBERME_DATA_FAILURE,
      payload: { errors: { message: '----------' } }
    });
    expect(reducer.rememberMeData.errors).toHaveProperty('message');
  });

  test('FETCH_REMEMBERME_DATA_END', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.FETCH_REMEMBERME_DATA_END,
      payload: { loading: false }
    });

    expect(reducer.rememberMeData).toHaveProperty('loading');
    expect(reducer.rememberMeData.loading).toBeFalsy();
  });

  test('MAKE_REMEMBERME_START', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.MAKE_REMEMBERME_START,
      payload: { loading: true }
    });
    expect(reducer.rememberMe).toHaveProperty('loading');
    expect(reducer.rememberMe.loading).toBeTruthy();
  });

  test('MAKE_REMEMBERME_SUCCESS (1)', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.MAKE_REMEMBERME_SUCCESS,
      payload: { message: 'done well' }
    });
    expect(reducer.rememberMe).toHaveProperty('message');
  });

  test('MAKE_REMEMBERME_SUCCESS (2)', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.MAKE_REMEMBERME_SUCCESS,
      payload: { message: 'Wrong parameter, please provide true or false as parameters.' }
    });
    expect(reducer.rememberMe).toHaveProperty('message');
  });

  test('MAKE_REMEMBERME_FAILURE', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.MAKE_REMEMBERME_FAILURE,
      payload: { errors: { message: 'error' } }
    });
    expect(reducer.rememberMe).toHaveProperty('errors');
  });

  test('MAKE_REMEMBERME_END', () => {
    const reducer = createTripRequestReducer(initialState, {
      type: rememberMeActionTypes.MAKE_REMEMBERME_END,
      payload: { loading: false }
    });

    expect(reducer.rememberMe).toHaveProperty('loading');
    expect(reducer.rememberMe.loading).toBeFalsy();
  });
});
