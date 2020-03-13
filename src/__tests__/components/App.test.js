import React from 'react';
import App from '../../components/App';
import { shallow } from '../../../config/enzymeConfig';


describe('Testing <App />', () => {
  describe('<App />', () => {
    test('renders without crashing', () => {
      const component = shallow(<App />);
      expect(component).toHaveLength(1);
    });
  });
});
