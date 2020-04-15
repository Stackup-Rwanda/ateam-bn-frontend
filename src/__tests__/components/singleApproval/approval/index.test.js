/* eslint-disable no-unused-vars */
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from '../../../../../config/enzymeConfig';
import initialState from '../../../../store/initialState';
import SingleApproval from '../../../../components/SingleApproval/Approval';
import { findByTestAttr } from '../../../../helpers';

export const mockStore = configureMockStore([thunk]);

const setUp = (props = {}) => {
  const store = mockStore({ ...initialState, approvals: { ...initialState.approvals } });
  const wrapper = shallow(<SingleApproval {...props} store={store} />).childAt(0).dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('SingleApproval Components', () => {
  describe('SingleApproval component will should render with no errors', () => {
    let component;
    let props;
    beforeEach(() => {
      props = { loading: false };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'singleApprovalComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render title body', () => {
      const wrapper = findByTestAttr(component, 'bodyComponent');
      expect(wrapper.length).toBe(1);
    });
  });
});
