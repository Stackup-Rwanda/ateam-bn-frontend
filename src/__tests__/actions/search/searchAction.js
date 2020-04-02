import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { searchData } from '../../../actions';
import requests from '../../../store/initialState';
import apiMiddleware from '../../../middlewares/apiMiddleware';


const dispatch = jest.fn((action) => action);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJkdW1teThqYWphUmVxdWVzdGVyIiwiZW1haWwiOiJkdW1teThqYWphQGVtYWlsLnJ3Iiwicm9sZSI6IlJFUVVFU1RFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTEyNzUwN30.FmkWzwPCuA5vXVXveaci1DNDIy_XTlHeWDCzwRI58L4';
let search;
describe('Testing actions', () => {
  test('Testing searchType', async () => {
    search = { request: 'Approved' };
    const result = searchData(token, search)(dispatch);
    expect(result).toBeTruthy();
  });

  test('Testing searchType', async () => {
    const error = {};
    search = { request: 'JJJJJJJJJJJJJJJJJJJJJ' };
    const result = searchData(token, search)(dispatch);
    result.then((response) => {
      expect(response).toBe(error);
    });
  });

  describe('Testing Actions', () => {
    test('Testing searchData Action', () => {
      const middlewares = [thunk, apiMiddleware];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore({
        ...requests,
        search: { search: null }
      });


      beforeEach(() => { moxios.install(); });
      afterEach(() => { moxios.uninstall(); });

      const expectResult = { search: null };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: expectResult
        });
      });
      return store.dispatch(searchData(token, { search: 'Approved' }))
        .then(() => {
          const newState = store.getState();
          expect(newState.search).toBeTruthy();
          expect(newState.search).toStrictEqual(expectResult);
        });
    });
  });
});
