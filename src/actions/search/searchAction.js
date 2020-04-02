import axios from 'axios';
import { backendURLs } from '../../helpers/index';
import { searchType } from '../../actionTypes';

export const searchData = (token, request) => {
  const config = { headers: { token } };
  const { search } = request;
  return (dispatch) => axios.post(`${backendURLs.HEROKU_URL}/api/search/request/`, { search }, config)
    .then((response) => {
      dispatch({
        type: searchType.SEARCH_SUCCESS,
        payload: response.data.data
      });
    })
    .catch((error) => {
      dispatch({
        type: searchType.SEARCH_FAILURE,
        payload: error.response.data.error
      });
    });
};
