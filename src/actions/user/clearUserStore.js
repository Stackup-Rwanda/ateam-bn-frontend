import { userActionTypes } from '../../actionTypes';

export default (payload) => (dispatch) => dispatch({
  type: userActionTypes.CLEAR_USER_STORE,
  payload
});
