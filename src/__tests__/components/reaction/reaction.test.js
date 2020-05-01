import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from '../../../../config/enzymeConfig';
import Reaction from '../../../components/accommodation/Reaction';
import store from '../../../__mocks__/store';

export const mockStore = configureMockStore([thunk]);

describe('<Reaction />', () => {
  test('changes color when clicked', () => {
    const accommodationId = '1';
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Reaction accommodationId={accommodationId} />
        </MemoryRouter>
      </Provider>);
    const icons = wrapper.find('[data-like-test="like"]');
    expect(icons).toHaveLength(2);
    const icon = icons.at(1);
    icon.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  test('changes color when clicked', () => {
    const accommodationId = '1';
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Reaction accommodationId={accommodationId} />
        </MemoryRouter>
      </Provider>);
    const icons = wrapper.find('[data-test="fire"]');
    expect(icons).toHaveLength(2);
    const icon = icons.at(1);
    icon.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  test('changes color when clicked', () => {
    const accommodationId = '1';
    const wrapper = mount(<Provider store={store}>
        <MemoryRouter>
          <Reaction accommodationId={accommodationId} />
        </MemoryRouter>
      </Provider>);
    const icons = wrapper.find('[data-hate-test="hate"]');
    expect(icons).toHaveLength(2);
    const icon = icons.at(1);
    icon.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
});
