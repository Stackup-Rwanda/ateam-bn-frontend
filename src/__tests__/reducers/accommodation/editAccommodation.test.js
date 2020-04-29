// eslint-disable-next-line import/named
import { accommodation as initialState } from '../../../store/initialState';
import { accommodationActionTypes } from '../../../actionTypes';
import accommodationReducer from '../../../reducers/accommodation';

describe('Testing Accommodation Reducer', () => {
  it('Accommodation Created LOADING', () => {
    const reducerResult = accommodationReducer(initialState, { type: accommodationActionTypes.EDIT_ACCOMMODATION_START, });
    expect(reducerResult.accommodation).toHaveProperty('loading');
  });
  it('Accommodation Created Successfully', () => {
    const reducerResult = accommodationReducer(initialState, {
      type: accommodationActionTypes.EDIT_ACCOMMODATION_SUCCESS,
      payload: { message: 'Accommodation Successfully Supplied' },
    });
    expect(reducerResult.accommodation).toHaveProperty('message');
  });
  it('Accommodation Created Failed', () => {
    const reducerResult = accommodationReducer(initialState, {
      type: accommodationActionTypes.EDIT_ACCOMMODATION_FAILURE,
      payload: { error: 'Please select one or more pictures' },
    });
    expect(reducerResult.accommodation).toHaveProperty('accommodationErrors');
  });
  it('Accommodation Created End', () => {
    const reducerResult = accommodationReducer(initialState, { type: accommodationActionTypes.EDIT_ACCOMMODATION_END, });
    expect(reducerResult.accommodation).toHaveProperty('loading');
  });
  it('default', () => {
    const reducerResult = accommodationReducer(initialState, {
      type: 'fake_action',
      payload: { error: 'failed_to_create_accommodation' },
    });
    expect(reducerResult.accommodation).toHaveProperty('message');
    expect(reducerResult.accommodation).toHaveProperty('accommodationErrors');
    expect(reducerResult.accommodation.message).toEqual('');
    expect(reducerResult.accommodation.accommodationErrors).toEqual(null);
  });
  it('Default', () => {
    const reducerResult = accommodationReducer(undefined, {
      type: null,
      payload: null,
    });
    expect(reducerResult.accommodation.message).toEqual('');
    expect(reducerResult.accommodation.accommodationErrors).toEqual(null);
  });
});
