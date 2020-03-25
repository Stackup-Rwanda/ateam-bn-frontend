import initialState from '../../store/initialState';

test('User initial state', () => {
  expect(initialState).toHaveProperty('user');
});
