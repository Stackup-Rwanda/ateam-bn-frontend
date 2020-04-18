import { fetchRememberMeDataAction, makeRememberMeAction } from '../../../actions/rememberMe';

const dispatch = jest.fn((action) => action);

describe('Remember Action', () => {
  test('should fetch remember data', async () => {
    const result = fetchRememberMeDataAction()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });

  test('should change remember state', async () => {
    const result = makeRememberMeAction(true)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});
