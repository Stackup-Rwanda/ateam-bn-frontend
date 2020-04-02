import axios from 'axios';
import { backendURLs } from '../../../helpers/index';
import { profileTypes } from '../../../actionTypes';


export const updateUserProfileDetails = (token, userUpdates) => {
  const config = { headers: { token } };
  const {
    name,
    gender,
    birthdate,
    preferredLanguage,
    preferredCurrency,
    location,
    cover,
    image
  } = userUpdates;
  const data = new FormData();
  data.append('name', name);
  data.append('gender', gender);
  data.append('birthdate', birthdate);
  data.append('preferredLanguage', preferredLanguage);
  data.append('preferredCurrency', preferredCurrency);
  data.append('location', location);
  if (cover) {
    data.append('cover', cover);
  } if (image) {
    data.append('image', image);
  }
  return (dispatch) => axios.patch(`${backendURLs.HEROKU_URL}/api/profile/`, data, config)
    .then((response) => {
      dispatch({
        type: profileTypes.UPDATE_PROFILE__SUCCESS,
        payload: response.data.message
      });
    })
    .catch((error) => {
      dispatch({
        type: profileTypes.UPDATE_PROFILE_FAILURE,
        payload: error.response.data.error
      });
    });
};
