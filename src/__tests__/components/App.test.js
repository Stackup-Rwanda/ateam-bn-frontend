import React from 'react';
import App from '../../components/App';
import { shallow } from '../../../config/enzymeConfig';
import ForgotPassword from '../../components/ResetPassword/ForgotPassword';
import ResetPassword from '../../components/ResetPassword/ResetPassword';

describe('Testing App component', () => {
  const wrapper = shallow(<App />);

  test('rendering div', () => {
    expect(wrapper.find('div'));
  });

  test('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });

  test('rendering ForgotPassword component', () => {
    expect(wrapper.find(<ForgotPassword />));
  });

  test('rendering ResetPassword component', () => {
    expect(wrapper.find(<ResetPassword />));
  });
});
