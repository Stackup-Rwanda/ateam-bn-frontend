import React from 'react';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import BookPopUp from '../../../components/accommodation/BookPopUp';
import { resolvedRequest } from '../../../__mocks__/axios';

export const mockStore = configureMockStore([thunk]);

let inputs = '';
const token = 'token';
describe('Testing <Accmmodation />', () => {
  test('displays error if room is not booked', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <BookPopUp />
        </MemoryRouter>
      </Provider>);
      // eslint-disable-next-line no-unused-vars
    const button = wrapper.find('[data-test="btn"]');
    mockAxios.post.mockRejectedValueOnce();
    button.simulate('click', { target: { }, preventDefault: jest.fn() });
  });

  test('displays message if room is booked', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <BookPopUp />
      </MemoryRouter>
    </Provider>);
    inputs = wrapper.find('input');
    inputs.map((input) => input.simulate('change', {
      target: (
        token, {
          name: input.instance().name,
          value: '2020-08-10'
        }
      )
    }));
    wrapper.setProps({ message: 'room successfully booked' });
    const button = wrapper.find('[data-test="btn"]');
    mockAxios.post.mockResolvedValueOnce(resolvedRequest);
    button.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper).toHaveLength(1);
  });
});
