import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import { mount, shallow } from '../../../../config/enzymeConfig';
import ResetPassword, { ResetPassword as ResetPasswordComponent } from '../../../components/ResetPassword/ResetPassword';
import { resetPassword, mismatchedResetPassword } from '../../../__mocks__/user';

let inputs = '';
let button = '';
let form = '';
let component = '';

describe('ResetPassword Component', () => {
  beforeEach(() => {
    const props = { match: { params: { token: 'token' } } };
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <ResetPassword {...props} />
        </MemoryRouter>
      </Provider>);
    form = component.find('form[title="Change your Password"]');
    inputs = component.find('form[title="Change your Password"] input');
    button = component.find('form[title="Change your Password"] button[type="submit"]');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('send new password if inputs is correct', () => {
    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('send new password if inputs is correct', () => {
    inputs.map((input) => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: mismatchedResetPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('fail in case the password is not matching', () => {
    inputs.map((input) => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: mismatchedResetPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('update with new password if values are correct', () => {
    inputs.map((input) => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: resetPassword[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('displays success message if the password was successfully updated', () => {
    const component = shallow(<ResetPasswordComponent />);
    component.setProps({ message: 'Password successfully updated' });
  });

  test('displays an error if the password is not updated', () => {
    const component = shallow(<ResetPasswordComponent />);
    component.setProps({ errors: { message: 'Network error' } });
  });
});
