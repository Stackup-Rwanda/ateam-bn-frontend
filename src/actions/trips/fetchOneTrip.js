import axios from 'axios';
import { FETCH_ONEREQUEST_FAIL, FETCH_ONEREQUEST_UNAPPROVED } from '../../actionTypes/tripsActionsTypes';

const getOneTripunApproved = (unApproved) => ({
  type: FETCH_ONEREQUEST_UNAPPROVED,
  payload: { unApproved }
});

const getOneTripFail = (error) => ({
  type: FETCH_ONEREQUEST_FAIL,
  payload: { error }
});

const getOneTrip = (token, id) => async (dispatch) => {
  try {
    const config = { headers: { token }, };
    const url = `https://ateam-bn-backend-staging.herokuapp.com/api/trips/${id}`;
    const result = await axios.get(url, config);
    const { status } = result.data.data;
    if (status === 'Approved') {
      return true;
    }
    dispatch(getOneTripunApproved('Trip request has not been yet approved'));
    return false;
  } catch (error) {
    dispatch(getOneTripFail(error.response.data.error));
    return false;
  }
};

export default getOneTrip;
