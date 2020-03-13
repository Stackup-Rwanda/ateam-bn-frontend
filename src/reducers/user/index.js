import initialState from '../../initialStates';
import oauthReducer from './oauthReducer';

export default (state = initialState, action) => {
  const oauth = oauthReducer(state, action);
  return (oauth);
};
