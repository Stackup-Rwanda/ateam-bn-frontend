import { fetchSingleAccommodationAction } from '../../../actions/accommodation';

const dispatch = jest.fn((action) => action);

describe('Retrieve Accommodation Action', () => {
  test('should retrieve single Accommodation', async () => {
    const result = fetchSingleAccommodationAction()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});
