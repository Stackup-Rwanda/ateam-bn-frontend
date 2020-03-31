import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import requests from '../../../store/initialState';
import TitleBar from '../../../components/TitleBar';
import { mount } from '../../../../config/enzymeConfig';


export const mockStore = configureMockStore([thunk]);

describe('Test for <TitleBar /> component', () => {
  const store = mockStore({
    ...requests,
    search: { ...requests.requests, search: null, searchErrors: null }
  });
  test('renders without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <TitleBar />
      </MemoryRouter>
    </Provider>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div'));
    expect(wrapper.filter('input'));
  });
});
