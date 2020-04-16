import React from 'react';
import { mount } from '../../../../../config/enzymeConfig';
import { Thumbnails } from '../../../../components/Requests/User/Thumbnails/Thumbnails';
import { fetchRequests } from '../../../../actions/trips';
import { token } from '../../../../__mocks__/user';

const dispatch = jest.fn((action) => action);

describe('<Thumbnails />', () => {
  test('renders without crashing', () => {
    const props = {
      fetchRequests: (token, page, limit) => dispatch(fetchRequests(token, page, limit)),
      requests: { trips: [] },
      token,
      history: { push: jest.fn() }
    };
    const component = mount(<Thumbnails {...props} />);
    const modalThumbnailsDiv = component.find('div');
    expect(modalThumbnailsDiv).toHaveLength(2);
  });
});
