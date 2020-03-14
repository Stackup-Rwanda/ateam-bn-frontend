/* eslint-disable no-unused-vars */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

export const mockStore = configureMockStore([thunk]);

let component = '';

const props = {
  getUsers: jest.fn(),
  editRole: jest.fn(),
  listOfUsers: [{ ...user, }],
};

describe('<userList />', () => {
  it('should render without crashing', () => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <userList />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });
});
