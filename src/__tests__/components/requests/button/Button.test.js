import React from 'react';
import Button from '../../../../components/Requests/User/Button';
import { shallow } from '../../../../../config/enzymeConfig';

describe('Test for <Button /> component', () => {
  const wrapper = shallow(<Button />);

  test('rendering the wrapping button', () => {
    expect(wrapper.find('button'));
  });
});
