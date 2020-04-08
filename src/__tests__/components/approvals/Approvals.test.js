import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import Approvals from '../../../components/Approvals';
import { findByTestAttr, checkProps } from '../../../helpers';

const setUp = (props = {}) => {
  const component = shallow(<Approvals {...props} />);
  return component;
};

describe('Approvals component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = { history: { push: jest.fn() } };

      const propsErr = checkProps(Approvals, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Approvals component will not render without token', () => {
    let component;
    let props;

    beforeEach(() => {
      props = { history: { push: jest.fn() } };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      findByTestAttr(component, 'approvalsComponent');
      expect(props.history.push.mock.calls.length).toBe(1);
    });
  });

  describe('Approvals component will only render when a token is provided', () => {
    let component;

    beforeEach(() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJSdW55YW1haGUiLCJlbWFpbCI6Im5pZ29yamVhbmx1Y0BnbWFpbC5jb20iLCJyb2xlIjoiTUFOQUdFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTczOTgzNX0.cdHNlV1vlOuRDLc3qCHfWd215wV97ZkmYlecYoboimo');
      const props = { history: { push: jest.fn() } };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'approvalsComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render MenuBar component', () => {
      const wrapper = findByTestAttr(component, 'menuBarComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render main div', () => {
      const wrapper = findByTestAttr(component, 'mainDiv');
      expect(wrapper.length).toBe(1);
    });

    it('Should render TitleBar component', () => {
      const wrapper = findByTestAttr(component, 'titleBarComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render TableSection component', () => {
      const wrapper = findByTestAttr(component, 'tableSectionComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render SideBar component', () => {
      const wrapper = findByTestAttr(component, 'sideBarComponent');
      expect(wrapper.length).toBe(1);
    });
  });
});
