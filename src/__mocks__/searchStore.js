import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import requests from '../store/initialState';
import apiMiddleware from '../middlewares/apiMiddleware';

export { requests };
export const middlewares = [thunk, apiMiddleware];
export const mockStore = configureMockStore(middlewares);

export default mockStore({
  ...requests,
  search: { ...requests.requests, search: null, searchErrors: null }
});
