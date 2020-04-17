import popularDestinationReducer from '../../../reducers/destinations';
import initialState from '../../../store/initialState';
import destination from '../../../__mocks__/destination';
import { tripsActionTypes } from '../../../actionTypes';

describe('get destinations reducer', () => {
  test('GET_DESTINATION_START', () => {
    const reducer = popularDestinationReducer(initialState, {
      type: tripsActionTypes.GET_DESTINATION_START,
      payload: { loading: true }
    });

    expect(reducer.getDestinations).toHaveProperty('loading');
    expect(reducer.getDestinations.loading).toBeTruthy();
  });
  test('GET_DESTINATION_SUCCESS', () => {
    const reducer = popularDestinationReducer(initialState, {
      type: tripsActionTypes.GET_DESTINATION_SUCCESS,
      payload: { data: { informations: [destination] } }
    });

    expect(reducer.listOfDestinations[0]).toEqual(destination);
    expect(reducer.listOfDestinations[0]).toHaveProperty('country');
    expect(reducer.listOfDestinations[0]).toHaveProperty('capitalCity');
    expect(reducer.listOfDestinations[0]).toHaveProperty('visitTimes');
  });

  test('GET_DESTINATION_FAIL', () => {
    const reducer = popularDestinationReducer(initialState, {
      type: tripsActionTypes.GET_DESTINATION_FAIL,
      payload: { destinationErrors: { message: '----------' } }
    });

    expect(reducer.getDestinations.destinationErrors).toHaveProperty('message');
  });


  test('GET_DESTINATION_END', () => {
    const reducer = popularDestinationReducer(initialState, {
      type: tripsActionTypes.GET_DESTINATION_END,
      payload: { loading: false }
    });

    expect(reducer.getDestinations).toHaveProperty('loading');
    expect(reducer.getDestinations.loading).toBeFalsy();
  });
});
