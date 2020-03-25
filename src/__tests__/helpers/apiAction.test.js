import { apiAction } from '../../helpers';

test('API action helper', () => {
  let result = apiAction({ url: '/auth/reset', method: 'POST' });

  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
  expect(result.payload).toHaveProperty('url');
  expect(result.payload.url).toEqual('/auth/reset');
  expect(result.payload).toHaveProperty('method');
  expect(result.payload.method).toEqual('POST');

  result = apiAction({});

  expect(result.payload.url).not.toEqual('/auth/reset');
  expect(result.payload.data).toEqual(null);
});
