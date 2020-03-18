import mockAxios from 'axios';
import { sendEmail } from '../../__mocks__/user';
import { resolvedRequest } from '../../__mocks__/axios';
import store from '../../__mocks__/store';
import apiMiddleware from '../../middlewares/apiMiddleware';
import { forgotPassword } from '../../actions/user';
import * as userActionsTypes from '../../actionTypes/userActionsTypes';

const dispatch = jest.fn((action) => action);
const next = dispatch;

describe('API middleware', () => {
  beforeEach(() => {
    store.clearActions();
    mockAxios.post.mockRestore();
  });

  test('returns errors if the request failed', async () => {
    mockAxios.post.mockResolvedValueOnce(null);
    await apiMiddleware(store)(next)({});
  });

  test('a user forgot password', async () => {
    const action = forgotPassword(sendEmail)(dispatch);
    mockAxios.post.mockResolvedValueOnce({ ...resolvedRequest, data: { sendEmail } });
    await apiMiddleware(store)(next)(action);

    expect(store.getActions().length).toBeGreaterThan(0);
    expect(store.getActions()[0].type).toEqual(userActionsTypes.FORGOT_PASSWORD_START);
    expect(store.getActions()[1].type).toEqual(userActionsTypes.FORGOT_PASSWORD_SUCCESS);
    expect(store.getActions()[2].type).toEqual(userActionsTypes.FORGOT_PASSWORD_END);
  });

  test('returns errors if the request failed', async () => {
    const action = forgotPassword(sendEmail)(dispatch);
    mockAxios.post.mockRejectedValueOnce({ response: { data: { error: { email: 'Sorry! This email does not exist in Barefoot system.' } } } });
    await apiMiddleware(store)(next)(action);

    expect(store.getActions().length).toBeGreaterThan(0);
    expect(store.getActions()[0].type).toEqual(userActionsTypes.FORGOT_PASSWORD_START);
    expect(store.getActions()[1].type).toEqual(userActionsTypes.FORGOT_PASSWORD_FAILURE);
    expect(store.getActions()[2].type).toEqual(userActionsTypes.FORGOT_PASSWORD_END);
  });
});
