import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Accommodation from '../../../components/accommodation/Accommodation';

export const mockStore = configureMockStore([thunk]);

let selects = '';

describe('Testing <Accmmodation />', () => {
  test('register user if all inputs are correct', () => {
    const props = { match: { params: { token: 'token' } }, tripApproved: true };
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Accommodation {...props}/>
      </MemoryRouter>
    </Provider>);
    expect(wrapper).toHaveLength(1);
  });

  test('register user if all inputs are correct', () => {
    const props = { match: { params: { token: 'token' } }, tripApproved: true };
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Accommodation {...props}/>
      </MemoryRouter>
    </Provider>);
    selects = wrapper.find('select');
    selects.map((select) => select.simulate('change', {
      target: {
        name: select.instance().name,
        value: 'Suites'
      }
    }));
    expect(wrapper).toHaveLength(1);
  });
});
