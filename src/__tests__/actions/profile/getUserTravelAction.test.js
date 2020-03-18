import { fetchUserTravel } from '../../../actions/profile/getUserTravelAction';

describe('Testing fetchUserTravel', () => {
  it('Testing fetchUserTravel action', () => {
    expect(fetchUserTravel()).toBeTruthy();
  });
});
