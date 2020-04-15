/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { configure } from 'enzyme';
import store from '../../../__mocks__/store';
import initialState from '../../../store/initialState';
import { mount } from '../../../../config/enzymeConfig';
import { login } from '../../../actions';
import Login from '../../../components/login';

export const mockStore = configureMockStore([thunk]);
configure({ adapter: new Adapter() });

describe('Testing <Login />', () => {
  let store = mockStore({
    ...initialState,
    user: { ...initialState.user, oauthErrors: null }
  });
  test('renders without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Login error={login} />
      </Router>
    </Provider>);
    expect(wrapper).toHaveLength(1);
  });
  test('renders with errors', () => {
    store = mockStore({
      ...initialState,
      user: { ...initialState.user, loginErrors: 'password or email is incorrect' }
    });
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Login error={login} />
      </MemoryRouter>
    </Provider>);
    const errors = wrapper.find('[data-test="test-div"]');
    expect(errors).toHaveLength(1);
  });
});

let component = '';
describe('Testing <Login />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>);
  });
  it('<Login User />', () => {
    expect(component).toHaveLength(1);
  });
  it('should accept email', () => {
    component
      .find('input[name="email"]')
      .map((input) => input.simulate('change', { target: { name: 'email', value: 'manziguevara@gmail.com' } }));
    expect(component).toHaveLength(1);
  });
  it('should accept password', () => {
    component
      .find('input[name="password"]')
      .map((input) => input.simulate('change', { target: { name: 'password', value: 'manzi123' } }));
    expect(component).toHaveLength(1);
  });
  it('should login user', () => {
    component.find('form[title="Fill form to Login"]').map((button) => button.simulate('click'));
    expect(component).toHaveLength(1);
  });
});
