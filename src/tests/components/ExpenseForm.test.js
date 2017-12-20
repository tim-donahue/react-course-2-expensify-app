import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);

  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm/>);

  expect(wrapper).toMatchSnapshot();

  // Activate form submit with missing data
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm/>);

  // Set description input value and verify the state changes
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
  const value = 'New note contents';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('note')).toBe(value);
});

test('should set amount for valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount for invalid input', () => {
  const value = '12.122';
  const expectedValue = '';
  const wrapper = shallow(<ExpenseForm/>);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe(expectedValue);
});
