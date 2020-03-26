import React from 'react';
import TitleBar from '../../../components/TitleBar';
import { shallow } from '../../../../config/enzymeConfig';

describe('Test for <TitleBar /> component', () => {
  const wrapper = shallow(<TitleBar />);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering the search input', () => {
    expect(wrapper.filter('input'));
  });
});
