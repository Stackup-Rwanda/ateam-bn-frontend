import fetchAccommodationReducer from '../../../reducers/accommodation/fetchAccommodationReducer';
import initialState from '../../../store/initialState';
import { accommodationActionTypes } from '../../../actionTypes';

describe('Fetch Accommodation reducer', () => {
  test('FETCH_ACCOMMODATION_START', () => {
    const reducer = fetchAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_ACCOMMODATION_START,
      payload: { loading: true }
    });
    expect(reducer.accommodations).toHaveProperty('loading');
    expect(reducer.accommodations.loading).toBeTruthy();
  });

  test('FETCH_ACCOMMODATION_SUCCESSFULLY', () => {
    const reducer = fetchAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_ACCOMMODATION_SUCCESS,
      payload: { message: 'done well', data: { paginate: [] } }
    });
    expect(reducer.accommodations).toHaveProperty('message');
  });

  test('FETCH_ACCOMMODATION_ERROR', () => {
    const reducer = fetchAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_ACCOMMODATION_FAILURE,
      payload: { errors: { message: '----------' } }
    });
    expect(reducer.accommodations.errors).toHaveProperty('message');
  });

  test('FETCH_ACCOMMODATION_END', () => {
    const reducer = fetchAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_ACCOMMODATION_END,
      payload: { loading: false }
    });

    expect(reducer.accommodations).toHaveProperty('loading');
    expect(reducer.accommodations.loading).toBeFalsy();
  });
});
