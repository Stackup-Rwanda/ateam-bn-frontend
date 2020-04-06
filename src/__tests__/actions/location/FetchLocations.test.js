import { fetchLocationsAction } from '../../../actions/location';

const dispatch = jest.fn((action) => action);

describe('Retreive Locations Action', () => {
  test('should retreive location', async () => {
    const result = fetchLocationsAction()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});
