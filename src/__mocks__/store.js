// eslint-disable-next-line import/no-extraneous-dependencies
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../initialStates';

export { initialState };

export { thunk };
export const mockStore = configureMockStore([thunk]);

export default mockStore({ ...initialState, user: { ...initialState.user, oauthErrors: null } });
