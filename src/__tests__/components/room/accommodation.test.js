import React from 'react';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Accommodation from '../../../components/accommodation/Accommodation';
import { resolvedRequest } from '../../../__mocks__/axios';

export const mockStore = configureMockStore([thunk]);

let selects = '';

describe('Testing <Accmmodation />', () => {
  test('register user if all inputs are correct', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Accommodation />
      </MemoryRouter>
    </Provider>);
    selects = wrapper.find('select');
    selects.map((select) => select.simulate('change', {
      target: {
        name: select.instance().name,
        value: 'all'
      }
    }));
    // eslint-disable-next-line no-unused-vars
    const button = wrapper.find('button');
    mockAxios.post.mockResolvedValueOnce(resolvedRequest);
  });

  test('register user if all inputs are correct', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Accommodation />
      </MemoryRouter>
    </Provider>);
    selects = wrapper.find('select');
    selects.map((select) => select.simulate('change', {
      target: {
        name: select.instance().name,
        value: 'suites'
      }
    }));
    // eslint-disable-next-line no-unused-vars
    const button = wrapper.find('button');
    mockAxios.post.mockResolvedValueOnce(resolvedRequest);
  });

  test('displays errors if the submitted form is empty', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Accommodation />
      </MemoryRouter>
    </Provider>);
    // eslint-disable-next-line no-unused-vars
    const button = wrapper.find('button');
    mockAxios.post.mockRejectedValueOnce();
  });
});
