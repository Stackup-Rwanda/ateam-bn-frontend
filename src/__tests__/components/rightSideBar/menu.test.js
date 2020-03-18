import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Menu from '../../../components/Sidebars/Menu/Menu';

describe('<Menu />', () => {
  test('renders without crashing', () => {
    const wrapper = mount(<Provider store={store}>
        <Router>
          <Menu />
        </Router>
      </Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
