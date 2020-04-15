import mockAxios from 'axios';
import getOneTrip from '../../../actions/trips/fetchOneTrip';
import store from '../../../__mocks__/store';

describe('get rooms action', () => {
  test('should not get one trip request', async () => {
    mockAxios.get.mockRejectedValueOnce({ response: { data: { error: 'error' }, status: 400 } });
    const result = await store.dispatch(getOneTrip({ token: 'token' }, { id: '4' }));
    expect(result).toBeFalsy();
  });
  test('should receive one trip', async () => {
    mockAxios.get.mockResolvedValueOnce({ response: { data: {}, status: 200 }, data: { data: { status: 'Approved' } } });
    const result = await store.dispatch(getOneTrip({ token: 'token' }, { id: '4' }));
    expect(result).toBeTruthy();
  });
  test('should receive one trip', async () => {
    mockAxios.get.mockResolvedValueOnce({ response: { data: {}, status: 200 }, data: { data: { } } });
    // eslint-disable-next-line no-unused-vars
    const result = await store.dispatch(getOneTrip({ token: 'token' }, { id: '4' }));
  });
});
