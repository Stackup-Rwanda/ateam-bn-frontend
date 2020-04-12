import fetchSingleAccommodationReducer from '../../../reducers/accommodation/fetchSingleAccommodationReducer';
import initialState from '../../../store/initialState';
import { accommodationActionTypes } from '../../../actionTypes';

describe('Fetch Accommodation reducer', () => {
  test('FETCH_ACCOMMODATION_START', () => {
    const reducer = fetchSingleAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_START,
      payload: { loading: true },
    });
    expect(reducer.accommodations).toHaveProperty('loading');
    expect(reducer.accommodations.loading).toBeTruthy();
  });

  test('FETCH_ACCOMMODATION_SUCCESSFULLY', () => {
    const reducer = fetchSingleAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_SUCCESS,
      payload: { message: 'done well', data: { paginate: [] } },
    });
    expect(reducer.accommodations).toHaveProperty('message');
  });

  test('FETCH_ACCOMMODATION_ERROR', () => {
    const reducer = fetchSingleAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_FAILURE,
      payload: { errors: { message: '----------' } },
    });
    expect(reducer.accommodations.errors).toHaveProperty('message');
  });

  test('FETCH_ACCOMMODATION_END', () => {
    const reducer = fetchSingleAccommodationReducer(initialState, {
      type: accommodationActionTypes.FETCH_SPECIFIC_ACCOMMODATION_END,
      payload: { loading: false },
    });

    expect(reducer.accommodations).toHaveProperty('loading');
    expect(reducer.accommodations.loading).toBeFalsy();
  });
});
