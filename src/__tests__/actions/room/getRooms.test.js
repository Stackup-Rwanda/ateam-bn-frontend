import mockAxios from 'axios';
import { getRooms } from '../../../actions/rooms/getRoomsActions';
import store from '../../../__mocks__/store';

describe('get rooms action', () => {
  test('should receive all rooms', async () => {
    const result = await store.dispatch(getRooms({ token: 'token' }));
    expect(result).toBeTruthy();
  });
  test('should receive all rooms', async () => {
    mockAxios.get.mockResolvedValueOnce({ response: { data: {}, status: 200 }, data: { data: { paginate: [] } } });
    const result = await store.dispatch(getRooms({ token: 'token' }));
    expect(result).toBeTruthy();
  });
});
