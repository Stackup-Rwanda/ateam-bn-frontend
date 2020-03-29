import React from 'react';
import Profile from '../../../components/profile/profile.s';
import { shallow } from '../../../../config/enzymeConfig';

describe('Testing App component', () => {
  const wrapper = shallow(<Profile />);

  test('rendering div', () => {
    expect(wrapper.find('div'));
  });
});
