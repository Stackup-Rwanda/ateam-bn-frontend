import React from 'react';
import RightSideBar from '../../../components/RightSideBar';
import { shallow } from '../../../../config/enzymeConfig';

describe('Test for <RightSideBar /> component', () => {
  const wrapper = shallow(<RightSideBar />);

  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });
});
