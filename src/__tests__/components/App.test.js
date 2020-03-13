import React from 'react';
import App from '../../App';
import { shallow } from '../../../config/enzymeConfig';


describe('Testing App component', () => {
  const wrapper = shallow(<App />);

  test('rendering div', () => {
    expect(wrapper.find('div'));
  });

  test('rendering button', () => {
    expect(wrapper.find('button').text(['Sign up']));
  });
});
