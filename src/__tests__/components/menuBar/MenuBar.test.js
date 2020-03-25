import React from 'react';
import MenuBar from '../../../components/MenuBar';
import { shallow } from '../../../../config/enzymeConfig';

describe('Test for <MenuBar /> component', () => {
  const wrapper = shallow(<MenuBar />);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering the anchor tags', () => {
    expect(wrapper.filter('a'));
  });
});
