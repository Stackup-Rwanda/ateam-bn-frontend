import React from 'react';
import { Dashboard } from '../../../components/Dashboard/Dashboard';
import MenuBar from '../../../components/MenuBar';
import { shallow } from '../../../../config/enzymeConfig';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoibWFuemkiLCJlbWFpbCI6ImJ1dGlyaWdpbWFuemlAZ21haWwuY29tIiwicm9sZSI6IlJFUVVFU1RFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTA3Mjk4NX0.ugOs3iZMcGU54EfNInopJ6TuDeNOcBXoNPpgKKomnbw',
    history: { push: jest.fn() }
  };
  // wrapper instance around rendered output
  const wrapper = shallow(<Dashboard {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Testing <Dashboard />', () => {
  describe('<Dashboard />', () => {
    const { wrapper, props } = shallowSetup();
    test('rendering div', () => {
      expect(wrapper.find('div').first().hasClass('wrapper')).toBe(true);
      expect(wrapper.find('div').first().contains(<MenuBar/>)).toBe(true);
      expect(props.history.push).toStrictEqual(expect.any(Function));
    });

    test('renders without crashing', () => {
      const { wrapper } = shallowSetup();
      expect(wrapper).toHaveLength(1);
    });
  });
});
