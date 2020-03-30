import React from 'react';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from '../../../../config/enzymeConfig';
import Signup from '../../../components/signup/Signup';
import { userToRegister } from '../../../__mocks__/user';
import { resolvedSignUpRequest, badRequest, conflict } from '../../../__mocks__/axios';
import store from '../../../__mocks__/store';

export const mockStore = configureMockStore([thunk]);

let inputs = '';
let selects = '';

// let input = '';
let button = '';
// let form = '';
let component = '';

describe('<Signup />', () => {
  test('register user if all inputs are correct', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    </Provider>);
    inputs = wrapper.find('input');
    selects = wrapper.find('select');
    inputs.map((input) => {
      if (input.instance().name !== 'birthdate' || input.instance().gender !== 'gender') {
        input.simulate('keyUp', {
          target: {
            name: input.instance().name,
            value: userToRegister[input.instance().name]
          }
        });
      }
      return input.simulate('change', {
        target: {
          name: input.instance().name,
          value: userToRegister[input.instance().name]
        }
      });
    });
    selects.map((select) => select.simulate('change', {
      target: {
        name: select.instance().name,
        value: userToRegister[select.instance().name]
      }
    }));
    const button = wrapper.find('button');
    button.simulate('click', { preventDefault: jest.fn() });
  });
  test('displays errors if the submitted form is empty', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('button');
    mockAxios.post.mockRejectedValueOnce(badRequest);
    button.simulate('click', { target: {}, preventDefault: jest.fn() });
  });
  test('displays success message if the User was created successfully', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('button');
    mockAxios.post.mockRejectedValueOnce(resolvedSignUpRequest);
    button.simulate('click', { target: {}, preventDefault: jest.fn() });
    expect(wrapper).toHaveLength(1);
  });
  test('displays errors if the email already exists', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('button');
    mockAxios.post.mockRejectedValueOnce(conflict);
    button.simulate('click', { target: {}, preventDefault: jest.fn() });
  });
  test('displays errors if the submitted form is empty', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('button');
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { message: 'message' } });
    button.simulate('click', { target: {}, preventDefault: jest.fn() });
  });
});

describe('signup Component', () => {
  test('displays success message if signup was successfull', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      </Provider>);
    inputs = component.find('input');
    button = component.find('button');
    component.setProps({ message: 'User was created successfully, Verify your email to confirm registration' });
    button.simulate('click', { target: {}, preventDefault: jest.fn() });
    expect(component).toHaveLength(1);
  });
});
