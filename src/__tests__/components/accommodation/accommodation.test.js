import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import Accommodation from '../../../components/accommodation/Accommodation';

export const mockStore = configureMockStore([thunk]);

const name = {
  persist: jest.fn(),
  preventDefault: jest.fn(),
  target: {
    name: 'name',
    value: 'Serena Hotel',
  },
};
const description = {
  persist: jest.fn(),
  preventDefault: jest.fn(),
  target: {
    name: 'description',
    value: 'The best',
  },
};
const locationId = {
  persist: jest.fn(),
  preventDefault: jest.fn(),
  target: {
    name: 'locationId',
    value: 2,
  },
};
const geoLocation = {
  persist: jest.fn(),
  preventDefault: jest.fn(),
  target: {
    name: 'geoLocation',
    value: '3.22, 34.212',
  },
};
const highlights = {
  persist: jest.fn(),
  preventDefault: jest.fn(),
  target: {
    name: 'highlights',
    value: 'Bana Boyi was Here',
  },
};
const amenities = {
  persist: jest.fn(),
  preventDefault: jest.fn(),
  target: {
    name: 'amenities',
    value: ['Gym', 'Free Wifi'],
  },
};
let component = '';
describe('Testing <Accommodation />', () => {
  beforeEach(() => {
    component = shallow(<Accommodation store={store} />);
  });
  it('<Create Accommodation />', () => {
    expect(component).toHaveLength(1);
  });
  it('should accept name', () => {
    component
      .find('input[name="name"]')
      .map((input) => input.simulate('change', name));
    expect(component).toHaveLength(1);
  });
  it('should accept description', () => {
    component
      .find('input[name="description"]')
      .map((input) => input.simulate('change', description));
    expect(component).toHaveLength(1);
  });
  it('should accept location', () => {
    component
      .find('input[name="description"]')
      .map((input) => input.simulate('change', locationId));
    expect(component).toHaveLength(1);
  });
  it('should accept geoLocation', () => {
    component.find('input[name="geoLocation"]')
      .map((input) => input.simulate('change', geoLocation));
    expect(component).toHaveLength(1);
  });
  it('should accept Highlights', () => {
    component
      .find('input[name="highlights"]')
      .map((input) => input.simulate('change', highlights));
    expect(component).toHaveLength(1);
  });
  it('should accept amenities', () => {
    component.find('input[name="amenities"]').map((input) => input.simulate('change', amenities));
    expect(component).toHaveLength(1);
  });
  it('should create new Accommodation', () => {
    component
      .find('form[title="Fill form to Create Accommodation"]')
      .map((button) => button.simulate('click'));
    expect(component).toHaveLength(1);
  });
});
