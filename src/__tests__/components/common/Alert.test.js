import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Alert } from '../../../components/common';

describe('<Alert />', () => {
  test('renders without crashing', () => {
    const component = mount(<Alert />);
    const p = component.find('p');
    expect(p).toHaveLength(1);
  });
});
