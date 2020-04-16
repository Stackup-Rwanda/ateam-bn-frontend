import mockAxios from 'axios';
import store from '../../../__mocks__/store';
import bookRoom from '../../../actions/rooms/bookRoomActions';
import { bookedRoom, bookedRoom2 } from '../../../__mocks__/room';

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJNckR1bW15MyIsImVtYWlsIjoiZHVtbXkzQGVtYWlsLnJ3Iiwicm9sZSI6IlRSQVZFTCBBRE1JTklTVFJBVE9SIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNTg2MzM1NjA4fQ.u0kcrqoifWgYzTpAZ0mYX9gvwe-xQuUPk3iAiMMhp38';

describe('Book room', () => {
  test('should be able to book a room', async () => {
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { message: 'message' } });
    const result = await store.dispatch(bookRoom(token1, bookedRoom));
    expect(result).toHaveProperty('payload');
    expect(result.payload.message).toEqual('message');
  });
  test('should be able to book a room', async () => {
    mockAxios.post.mockRejectedValueOnce({ response: { data: {}, status: 302, bookedError: 'message' } });
    const result = await store.dispatch(bookRoom(token1, bookedRoom));
    expect(result).toHaveProperty('payload');
  });
  test('should not be able to book a room', async () => {
    mockAxios.post.mockRejectedValueOnce({ response: { data: {}, status: 422, bookedError: 'error' } });
    const result = await store.dispatch(bookRoom(token1, bookedRoom2));
    expect(result).toHaveProperty('payload');
  });
});
