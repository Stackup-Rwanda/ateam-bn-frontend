import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Accommodation from '../../../components/accommodation/Accommodation';

export const mockStore = configureMockStore([thunk]);

describe('Testing <Accmmodation />', () => {
  test('register user if all inputs are correct', async () => {
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJNckR1bW15MyIsImVtYWlsIjoiZHVtbXkzQGVtYWlsLnJ3Iiwicm9sZSI6IlRSQVZFTCBBRE1JTklTVFJBVE9SIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNTg3NTU1NTczfQ.JBRS_z8Jn0gAuIKLeZ-4IWskatny_d4Xr_m78LB_-oM');
    const accommodationId = '1';
    const tripId = '4';
    const props = { match: { params: { accommodationId, tripId } } };
    const wrapper = await mount(<Provider store={store}>
        <MemoryRouter>
          <Accommodation {...props} />
        </MemoryRouter>
      </Provider>);
    expect(wrapper).toHaveLength(1);
  });

  test('register user if all inputs are correct', async () => {
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJNckR1bW15MyIsImVtYWlsIjoiZHVtbXkzQGVtYWlsLnJ3Iiwicm9sZSI6IlRSQVZFTCBBRE1JTklTVFJBVE9SIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNTg3NTU1NTczfQ.JBRS_z8Jn0gAuIKLeZ-4IWskatny_d4Xr_m78LB_-oM');
    const accommodationId = '1';
    const props = { tripApproved: true, match: { params: { accommodationId } } };
    const wrapper = await mount(<Provider store={store}>
      <MemoryRouter>
        <Accommodation {...props}/>
      </MemoryRouter>
    </Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
