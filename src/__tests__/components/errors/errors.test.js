import React from 'react';
import Error from '../../../components/errors/AuthError';
import { shallow } from '../../../../config/enzymeConfig';

describe('Testing Error component', () => {
  const wrapper = shallow(<Error />);

  test('rendering div', () => {
    expect(wrapper.find('div'));
  });
});
