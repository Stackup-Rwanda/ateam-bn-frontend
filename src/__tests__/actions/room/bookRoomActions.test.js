import bookRoom from '../../../actions/rooms/bookRoomActions';
import { bookedRoom } from '../../../__mocks__/room';

const dispatch = jest.fn((action) => action);
const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJNckR1bW15MyIsImVtYWlsIjoiZHVtbXkzQGVtYWlsLnJ3Iiwicm9sZSI6IlRSQVZFTCBBRE1JTklTVFJBVE9SIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNTg2MzM1NjA4fQ.u0kcrqoifWgYzTpAZ0mYX9gvwe-xQuUPk3iAiMMhp38';

describe('Book room', () => {
  test('should be able to book a room', async () => {
    const result = await bookRoom(token1, bookedRoom)(dispatch);
    expect(result).toHaveProperty('payload');
  });
  test('should not be able to book a room', async () => {
    const result = await bookRoom()(dispatch);
    expect(result).toHaveProperty('payload');
  });
});
