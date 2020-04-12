import getRooms from '../../../actions/rooms/getRoomsActions';
import store from '../../../__mocks__/store';

describe('get rooms action', () => {
  test('should receive all rooms', async () => {
    const result = await store.dispatch(getRooms({ token: 'token' }));
    expect(result).toBeTruthy();
  });
});
