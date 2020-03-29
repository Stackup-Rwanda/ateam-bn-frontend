
import { fetchUserProfileDetails } from './profileAction/getUserProfileAction.s';


const getUserProfileActions = () => {
  const getUserProfileActionTested = fetchUserProfileDetails;
  return getUserProfileActionTested;
};

export { getUserProfileActions };
