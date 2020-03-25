import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Requests from '../../../components/Requests/User';
import { shallow } from '../../../../config/enzymeConfig';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoibWFuemkiLCJlbWFpbCI6ImJ1dGlyaWdpbWFuemlAZ21haWwuY29tIiwicm9sZSI6IlJFUVVFU1RFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTA3Mjk4NX0.ugOs3iZMcGU54EfNInopJ6TuDeNOcBXoNPpgKKomnbw',
    history: { push: jest.fn() }
  };
  // wrapper instance around rendered output
  const wrapper = shallow(<MemoryRouter initialEntries={['/requests']}>
      <Requests {...props} />
    </MemoryRouter>);

  return {
    props,
    wrapper
  };
}

describe('Testing <Requests />', () => {
  describe('<Requests />', () => {
    const { wrapper, props } = shallowSetup();
    test('rendering div', () => {
      expect(wrapper.find('div'));
      expect(wrapper.find('MenuBar'));
      expect(props.history.push).toStrictEqual(expect.any(Function));
    });

    test('renders without crashing', () => {
      const { wrapper } = shallowSetup();
      expect(wrapper).toHaveLength(1);
    });
  });
});
