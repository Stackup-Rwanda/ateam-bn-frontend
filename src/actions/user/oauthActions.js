import { oauthHelper } from '../../helpers';

const oauthSuccess = (payload) => (dispatch) => {
  const createdAction = oauthHelper(payload);
  return dispatch(createdAction);
};

export default oauthSuccess;
