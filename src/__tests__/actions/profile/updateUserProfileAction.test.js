import { updateUserProfileDetail } from '../../../actions/profile/updateUserProfileAction';

describe('Testing updateUserProfileDetail', () => {
  it('Testing updateUserProfileDetail action', () => {
    expect(updateUserProfileDetail()).toBeTruthy();
  });
});
