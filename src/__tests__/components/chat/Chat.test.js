import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { mount } from '../../../../config/enzymeConfig';
import Chat from '../../../components/chat';
import MessageBox from '../../../components/chat/MessageBox';

export const mockStore = configureMockStore([thunk]);


describe('Testing <Chat />', () => {
  const store = mockStore({
    message: 'hello',
    messages: [{ Users: { username: 'marc', profilePhoto: '' }, message: { message: 'good morning', createdAt: new Date() } }]
  });
  test('renders without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
        <Chat />
      </MemoryRouter>
    </Provider>);
    expect(wrapper).toHaveLength(1);
  });
  test('renders without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <MemoryRouter>
          <MessageBox />
      </MemoryRouter>
      </Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
