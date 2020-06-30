import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import AddLinks from './containers/AddLinks/AddLinks.js';
import ListLinks from './containers/ListLinks/ListLinks.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

// for AddLink.js test
const setupAddLinks = (props={}, state=null) => {
  const wrapper = shallow(<AddLinks {...props} />) 
  if(state) wrapper.setState(state)
  return wrapper;
}

test('renders AddLinks page without error', () => {
  const wrapper = setupAddLinks();
  const addLinkComponent = findByTestAttr(wrapper, 'add-link-page');
  expect(addLinkComponent.length).toBe(1);
});

test('renders add link button', () => {
  const wrapper = setupAddLinks();
  const button = findByTestAttr(wrapper, 'add-link-button');
  expect(button.length).toBe(1);
})

test('renders first input', () => {
  const wrapper = setupAddLinks();
  const firstInput = findByTestAttr(wrapper, 'first-input');
  expect(firstInput.length).toBe(1);
})

test('renders first input', () => {
  const wrapper = setupAddLinks();
  const firstInput = findByTestAttr(wrapper, 'first-input');
  expect(firstInput.length).toBe(1);
})

test('renders second input', () => {
  const wrapper = setupAddLinks();
  const secondInput = findByTestAttr(wrapper, 'second-input');
  expect(secondInput.length).toBe(1);
})

test('renders alert at false', () => {
  const wrapper = setupAddLinks();
  const initialCounterState = wrapper.state('alert');
  expect(initialCounterState).toBe(false);
})

// for ListLink test
const setupListLinks = (props={}, state=null) => {
  const wrapper = shallow(<ListLinks {...props} />) 
  if(state) wrapper.setState(state)
  return wrapper;
}

test('renders ListLinks page without error', () => {
  const wrapper = setupListLinks();
  const addLinkComponent = findByTestAttr(wrapper, 'list-link-page');
  expect(addLinkComponent.length).toBe(1);
});

