import axios from 'axios';
import { backendURLs } from '../../../helpers/index';
import { profileTypes } from '../../../actionTypes';

export const fetchPlaces = (token) => {
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.HEROKU_URL}/api/places/`, config)
    .then((response) => {
      dispatch({
        type: profileTypes.GET_PLACE_SUCCESS,
        payload: response.data.data.paginate
      });
    })
    .catch((error) => {
      dispatch({
        type: profileTypes.REQUEST_FAILURE,
        payload: error
      });
    });
};
