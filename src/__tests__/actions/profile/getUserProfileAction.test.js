import { getUserProfileActions } from '../../../actions/profile/getUserProfileAction';

describe('Testing getUserProfileActions', () => {
  it('Testing getUserProfileActions action', () => {
    expect(getUserProfileActions()).toBeTruthy();
  });
});
