import React from 'react';
import SectionOne from '../../../../components/Dashboard/SectionOne';
import { shallow } from '../../../../../config/enzymeConfig';

describe('Test for <SectionOne /> component', () => {
  const wrapper = shallow(<SectionOne />);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering the anchor tags', () => {
    expect(wrapper.filter('p'));
  });
});
