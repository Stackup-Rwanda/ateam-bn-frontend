import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { mount } from '../../../../config/enzymeConfig';
import { user as initialState } from '../../../store/initialState';
import { oauthActions } from '../../../actions';
import Login from '../../../components/login';

export const mockStore = configureMockStore([thunk]);


describe('Testing <Login />', () => {
  let store = mockStore({ ...initialState, user: { ...initialState.user, oauthErrors: null } });
  test('renders without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Login oauthActions={oauthActions} />
      </MemoryRouter>
    </Provider>);
    expect(wrapper).toHaveLength(1);
  });
  test('renders with errors', () => {
    store = mockStore({ ...initialState, user: { ...initialState.user, oauthErrors: 'email is already in use' } });
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Login oauthActions={oauthActions} />
      </MemoryRouter>
    </Provider>);
    const errors = wrapper.find('AuthError');
    expect(errors).toHaveLength(1);
  });
});
