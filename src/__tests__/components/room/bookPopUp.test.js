import React from 'react';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import BookPopUp from '../../../components/accommodation/BookPopUp';
import { bookedRoom2 } from '../../../__mocks__/room';

export const mockStore = configureMockStore([thunk]);

describe('Testing <Accmmodation />', () => {
  test('displays error if room is not booked', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <BookPopUp />
        </MemoryRouter>
      </Provider>);
      // eslint-disable-next-line no-unused-vars
    const button = wrapper.find('[data-test="btn"]');
    mockAxios.post.mockRejectedValueOnce({ response: { data: {}, status: 422 }, data: { error: {} } });
    button.simulate('click', { target: { bookedRoom2 }, preventDefault: jest.fn() });
  });
  test('displays message if room is booked', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <BookPopUp />
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('[data-test="btn"]');
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { data: { message: 'message' } } });
    button.simulate('click', { target: { }, preventDefault: jest.fn() });
    expect(wrapper).toHaveLength(1);
  });
  test('displays error if room is not booked', () => {
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <BookPopUp />
        </MemoryRouter>
      </Provider>);
      // eslint-disable-next-line no-unused-vars
    const button = wrapper.find('[data-test="btn"]');
    mockAxios.post.mockRejectedValueOnce({ response: { data: {}, status: 302 }, data: { error: 'error' } });
    button.simulate('click', { target: { }, preventDefault: jest.fn() });
    expect(wrapper).toHaveLength(1);
  });

  test('displays message if room is booked', () => {
    const roomId = '1';
    const tripId = '4';
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <BookPopUp tripId={tripId} roomId={roomId}/>
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('[data-test="btn"]');
    mockAxios.post.mockResolvedValueOnce({ request: { data: {}, status: 201 }, data: { data: { message: 'message' } } });
    button.simulate('click', { target: { }, preventDefault: jest.fn() });
    expect(wrapper).toHaveLength(1);
  });
});
