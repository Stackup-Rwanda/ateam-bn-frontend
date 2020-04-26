import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MenuBar from '../../../components/MenuBar';
import { shallow } from '../../../../config/enzymeConfig';

export const mockStore = configureMockStore([thunk]);

describe('Test for <MenuBar /> component', () => {
  const store = mockStore({
    message: 'hello'
  });
  const wrapper = shallow(<MenuBar store={store}/>);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering the anchor tags', () => {
    expect(wrapper.filter('a'));
  });
});
