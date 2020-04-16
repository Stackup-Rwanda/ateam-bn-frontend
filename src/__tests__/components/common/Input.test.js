import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Input } from '../../../components/common';

describe('<Input />', () => {
  test('renders without crashing', () => {
    const component = mount(<Input />);
    const input = component.find('input');
    input.simulate('change', {});
    expect(component).toHaveLength(1);
  });
  test('renders without crashing and displays errors in the input', () => {
    const component = mount(<Input error="error" />);
    const input = component.find('input');
    input.simulate('change', {});
    expect(component).toHaveLength(1);
  });
});
