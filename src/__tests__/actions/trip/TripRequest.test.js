import { createTripRequestAction, editTripRequestAction } from '../../../actions/trips';
import { tripRequest } from '../../../__mocks__/trip';

const dispatch = jest.fn((action) => action);

describe('Create Trip Request Action', () => {
  test('should create a trip', async () => {
    const result = createTripRequestAction(tripRequest)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data.name).toEqual(tripRequest.name);
  });

  test('should edit a trip', async () => {
    const result = editTripRequestAction(1, tripRequest)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data.name).toEqual(tripRequest.name);
  });
});
