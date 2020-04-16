import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SectionOne from '../../../../components/Dashboard/SectionOne';
import { shallow } from '../../../../../config/enzymeConfig';
import initialState from '../../../../store/initialState';

export const mockStore = configureMockStore([thunk]);

describe('Test for <SectionOne /> component', () => {
  const store = mockStore({ ...initialState, destinations: { ...initialState.destinations } });
  const wrapper = shallow(<Provider store={store}>
    <SectionOne />

    </Provider>);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering the anchor tags', () => {
    expect(wrapper.filter('p'));
  });
});
