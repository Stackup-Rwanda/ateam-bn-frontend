import axios from 'axios';
import { backendURLs } from '../../../helpers/index';
import { profileTypes } from '../../../actionTypes';

export const fetchUserTravels = (token) => {
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.HEROKU_URL}/api/trips/`, config)
    .then((response) => {
      dispatch({
        type: profileTypes.GET_USER_TRAVEL_SUCCESS,
        payload: response.data.data.paginate
      });
    })
    .catch((error) => {
      dispatch({
        type: profileTypes.GET_USER_TRAVEL_FAILURE,
        payload: error.message
      });
    });
};
