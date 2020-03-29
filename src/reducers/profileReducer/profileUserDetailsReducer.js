import { profileTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case profileTypes.GET_USER_PROFILE__SUCCESS:
      return {
        ...state,
        userProfileDetails: payload
      };
    case profileTypes.GET_PLACE_SUCCESS:
      return {
        ...state,
        allPlaces: payload
      };
    case profileTypes.GET_USER_TRAVEL_SUCCESS:
      return {
        ...state,
        userProfileTravels: payload
      };
    case profileTypes.UPDATE_PROFILE__SUCCESS:
      return {
        ...state,
        updateProfile: payload
      };
    case profileTypes.GET_USER_TRAVEL_FAILURE:
      return {
        ...state,
        userTravelsError: `Hello, Travel ${payload}`
      };
    case profileTypes.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateProfile: `Hello, ${payload}`
      };
    case profileTypes.REQUEST_FAILURE:
      return {
        ...state,
        message: `Hello, ${payload}`
      };

    default:
      return null;
  }
};
