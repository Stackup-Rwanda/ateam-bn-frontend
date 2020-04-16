import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Modal } from '../../../components/common';

describe('<Modal />', () => {
  test('renders without crashing', () => {
    const component = mount(<Modal />);
    const button = component.find('button');
    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('renders a div without crashing', () => {
    const props = { modalFooter: 'modalFooter' };
    const component = mount(<Modal {...props} />);
    const modalFooterDiv = component.find('div');
    expect(modalFooterDiv).toHaveLength(5);
  });
});
