import axios from 'axios';
import { backendURLs } from '../../../helpers/index';
import { profileTypes } from '../../../actionTypes';

export const fetchUserTravels = (token, page) => {
  const config = { headers: { token } };
  const limit = 5;
  return (dispatch) => axios.get(`${backendURLs.HEROKU_URL}/api/trips/?page=${page}&limit=${limit}`, config)
    .then((response) => {
      dispatch({
        type: profileTypes.GET_USER_TRAVEL_SUCCESS,
        payload: response.data.data
      });
    })
    .catch((error) => {
      dispatch({
        type: profileTypes.GET_USER_TRAVEL_FAILURE,
        payload: error.response.data.message
      });
    });
};
