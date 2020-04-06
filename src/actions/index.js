import oauthActions from './user/oauthActions';
import login from './user/login';
import * as userAction from './user';
import * as tripActions from './trips';
import { updateUserProfileDetails } from './profile/profileAction/updateUserProfileAction.s';
import { fetchUserProfileDetails } from './profile/profileAction/getUserProfileAction.s';
import { fetchUserTravels } from './profile/profileAction/getUserTravelAction.s';
import { fetchPlaces } from './profile/profileAction/fetchUserPlaceAction.s';
import { searchData } from './search/searchAction';
import { getAllApprovals } from './approvals';
import * as locationActions from './location';
import * as accommodationActions from './accommodation';

export {
  oauthActions,
  userAction,
  login,
  tripActions,
  fetchUserProfileDetails,
  fetchUserTravels,
  fetchPlaces,
  updateUserProfileDetails,
  searchData,
  getAllApprovals,
  locationActions,
  accommodationActions
};
