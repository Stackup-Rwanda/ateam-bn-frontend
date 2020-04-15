import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Requests from '../../../components/Requests/User';
import { shallow } from '../../../../config/enzymeConfig';
import { getAllRequests, createTripRequestAction, editTripRequestAction } from '../../../actions/trips';
import { fetchLocationsAction } from '../../../actions/location';

const dispatch = jest.fn((action) => action);

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    // eslint-disable-next-line max-len
    // localStorage.token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoibWFuemkiLCJlbWFpbCI6ImJ1dGlyaWdpbWFuemlAZ21haWwuY29tIiwicm9sZSI6IlJFUVVFU1RFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTA3Mjk4NX0.ugOs3iZMcGU54EfNInopJ6TuDeNOcBXoNPpgKKomnbw',
    history: { push: jest.fn() },
    getAllRequests: (page, limit) => dispatch(getAllRequests(page, limit)),
    fetchLocations: () => dispatch(fetchLocationsAction()),
    createTripRequest: (form) => dispatch(createTripRequestAction(form)),
    editTripRequest: (id, form) => dispatch(editTripRequestAction(id, form)),
    requests: {
      trips: [
        { id: 1, status: 'Pending', date: '2020-05-25', returnDate: '2020-05-28', Accommodations: { image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/fd/0e/a9/double-room-with-extra.jpg' } },
        { id: 2, status: 'Approved', date: '2020-05-2', returnDate: '2020-05-30', Accommodations: { image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/fd/0e/a9/double-room-with-extra.jpg' } },
      ]
    },
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
      expect(wrapper.find('button'));
      expect(wrapper.find('form'));
      expect(wrapper.find('input'));
      expect(wrapper.find('select'));
      expect(wrapper.find('textarea'));
      expect(props.history.push).toStrictEqual(expect.any(Function));
    });

    test('renders without crashing', () => {
      const { wrapper } = shallowSetup();
      expect(wrapper).toHaveLength(1);
    });
  });
});
