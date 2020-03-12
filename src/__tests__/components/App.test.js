import React from 'react';
import App from '../../App';
import { shallow } from '../../../config/enzymeConfig';


describe('Testing App component', () => {
  const wrapper = shallow(<App />);

  test('rendering learn react link', () => {
    expect(wrapper.find('a').text()).toContain('Learn React');
  });

  test('rendering paragraph', () => {
    expect(wrapper.find('p').text(['Edit', <code>src/App.js</code>, 'and save to reload.']));
  });

})

