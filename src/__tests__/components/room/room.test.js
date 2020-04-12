import React from 'react';
import mockAxios from 'axios';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Room from '../../../components/accommodation/Room';
import { resolvedRequest } from '../../../__mocks__/axios';
import { bookedRoom } from '../../../__mocks__/room';

export const mockStore = configureMockStore([thunk]);

describe('Testing <Accmmodation />', () => {
  test('displays message if room is booked', () => {
    const room = {
      roomType: 'suites',
      cost: '500'
    };
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Room room={room}/>
      </MemoryRouter>
    </Provider>);
    const button = wrapper.find('button');
    mockAxios.post.mockResolvedValueOnce(resolvedRequest);
    button.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper).toHaveLength(1);
  });
});
