import React from 'react';
import error from '../../../components/errors/AuthError';
import { shallow } from '../../../../config/enzymeConfig';

describe('Testing Error component', () => {
  const wrapper = shallow(<error />);

  test('rendering div', () => {
    expect(wrapper.find('div'));
  });
});
