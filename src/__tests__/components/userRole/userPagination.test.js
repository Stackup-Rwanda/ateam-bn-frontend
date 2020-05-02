import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import usersPagination from '../../../components/userRole/usersPagination';
import { shallow } from '../../../../config/enzymeConfig';
import initialState from '../../../store/initialState';

export const mockStore = configureMockStore([thunk]);

describe('Test for <usersPagination /> component', () => {
  const store = mockStore({ ...initialState, stats: { ...initialState.stats } });

  const wrapper = shallow(<Provider store={store}>
  <usersPagination />

    </Provider>);
  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });
});
