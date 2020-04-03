/* eslint-disable no-unused-vars */
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from '../../../../../config/enzymeConfig';
import initialState from '../../../../store/initialState';
import TableSection, { TableSection as Table } from '../../../../components/Approvals/TableSection';
import { findByTestAttr, checkProps } from '../../../../helpers';

export const mockStore = configureMockStore([thunk]);

const setUp = (props = {}) => {
  const store = mockStore({ ...initialState, approvals: { ...initialState.approvals } });
  const wrapper = shallow(<TableSection {...props} store={store} />).childAt(0).dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('TableSection Components', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        listOfApprovals: [],
        Next: {},
        Previous: {},
        errors: {},
        loading: false
      };

      const propsErr = checkProps(Table, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('TableSection component will should render with no errors', () => {
    let component;
    let props;
    beforeEach(() => {
      props = {
        listOfApprovals: [],
        Next: {
          page: 1,
          limit: 6
        },
        Previous: {},
        errors: {},
        loading: false
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'tableSectionComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render title span', () => {
      const wrapper = findByTestAttr(component, 'titleSpan');
      expect(wrapper.length).toBe(1);
    });

    it('Should render approvals table', () => {
      const wrapper = findByTestAttr(component, 'approvalsTable');
      expect(wrapper.length).toBe(1);
    });

    it('Should render pagination div', () => {
      const wrapper = findByTestAttr(component, 'paginationDiv');
      expect(wrapper.length).toBe(1);
    });

    it('Should render next button', () => {
      const wrapper = findByTestAttr(component, 'iconNext');
      wrapper.simulate('click');
      expect(wrapper.length).toBe(1);
    });

    it('Should render prev button', () => {
      const wrapper = findByTestAttr(component, 'iconPrev');
      wrapper.simulate('click');
      expect(wrapper.length).toBe(1);
    });
  });
});
