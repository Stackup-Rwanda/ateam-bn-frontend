import { fetchUserPlaceAction } from '../../../actions/profile/fetchUserPlaceAction';

describe('Testing fetchUserPlaceAction', () => {
  it('Testing fetchUserPlaceAction action', () => {
    expect(fetchUserPlaceAction()).toBeTruthy();
  });
});
