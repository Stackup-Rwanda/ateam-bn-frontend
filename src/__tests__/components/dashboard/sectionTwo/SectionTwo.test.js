import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SectionTwo from '../../../../components/Dashboard/SectionTwo';
import { shallow } from '../../../../../config/enzymeConfig';
import { requests as initialState } from '../../../../store/initialState';

export const mockStore = configureMockStore([thunk]);

describe('Test for <SectionTwo /> component', () => {
  const store = mockStore({ ...initialState, requests: { ...initialState.requests } });
  const wrapper = shallow(<Provider store={store}>
      <MemoryRouter>
        <SectionTwo />
      </MemoryRouter>
    </Provider>);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering the anchor tags', () => {
    expect(wrapper.filter('p'));
  });
});
