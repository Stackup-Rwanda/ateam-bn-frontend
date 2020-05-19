import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import Approval from '../../../components/SingleApproval';
import { findByTestAttr } from '../../../helpers';

const setUp = (props = {}) => {
  const component = shallow(<Approval {...props} />);
  return component;
};

describe('Approval component', () => {
  describe('Approval component will not render without token', () => {
    let component;
    let props;

    beforeEach(() => {
      props = {
        history: { push: jest.fn() },
        match: { params: 20 }
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      findByTestAttr(component, 'approvalComponent');
      expect(props.history.push.mock.calls.length).toBe(1);
    });
  });

  describe('Approvals component will only render when a token is provided', () => {
    let component;

    beforeEach(() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJSdW55YW1haGUiLCJlbWFpbCI6Im5pZ29yamVhbmx1Y0BnbWFpbC5jb20iLCJyb2xlIjoiTUFOQUdFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTczOTgzNX0.cdHNlV1vlOuRDLc3qCHfWd215wV97ZkmYlecYoboimo');
      const props = {
        history: { push: jest.fn() },
        match: { params: 20 }
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'approvalComponent');
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

    it('Should render SingleApproval component', () => {
      const wrapper = findByTestAttr(component, 'singleApprovalComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render SideBar component', () => {
      const wrapper = findByTestAttr(component, 'sideBarComponent');
      expect(wrapper.length).toBe(1);
    });
  });
});
