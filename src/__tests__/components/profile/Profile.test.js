import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import { Profile } from '../../../components/profile';


describe('Testing <Profile />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}>
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    </Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
