import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import RightSideBar from '../../../components/RightSideBar';
import { shallow } from '../../../../config/enzymeConfig';
import initialState from '../../../store/initialState';

export const mockStore = configureMockStore([thunk]);

describe('Test for <RightSideBar /> component', () => {
  const store = mockStore({ ...initialState, stats: { ...initialState.stats } });

  const wrapper = shallow(<Provider store={store}>
  <RightSideBar />

    </Provider>);
  test('rendering the wrapping div', () => {
    expect(wrapper.find('div'));
  });
});
