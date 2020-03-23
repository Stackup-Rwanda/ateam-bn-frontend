import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../__mocks__/store';
import { mount } from '../../../config/enzymeConfig';
// components
import { Profile } from '../../components/profile';
import Login from '../../components/login';
// routes
import Routes from '../../components/routes';

describe('Testing Routes', () => {
  test('rendering <Login />', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Login)).toHaveLength(1);
  });
  test('rendering <Profile />', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/profile']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });
});
