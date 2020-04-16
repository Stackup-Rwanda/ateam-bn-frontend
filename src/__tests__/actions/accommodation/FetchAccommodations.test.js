import { fetchAccommodationAction } from '../../../actions/accommodation';

const dispatch = jest.fn((action) => action);

describe('Retreive Accommodation Action', () => {
  test('should retreive accommodation', async () => {
    const result = fetchAccommodationAction()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});
