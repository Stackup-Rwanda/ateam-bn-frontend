import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import Routes from '../../components/Routes';
import ForgotPassword from '../../components/ResetPassword/ForgotPassword';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import Login from '../../components/login';
import userRole from '../../components/userRole/UserRole';

describe('<Routes />', () => {
  test('renders <ForgotPassword /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/forgot-password']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(ForgotPassword)).toHaveLength(1);
  });

  test('renders <ResetPassword /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/reset-password/:userId/:token']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(ResetPassword)).toHaveLength(1);
  });

  test('rendering <Login />', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Login)).toHaveLength(1);
  });

  test('rendering <Dashboard/>', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Login).length).toBe(1);
  });

  test('rendering <Requests />', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/requests']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Login).length).toBe(1);
  });

  test('rendering <userRole />', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/userRole']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(userRole).length).toBe(1);
  });
});
