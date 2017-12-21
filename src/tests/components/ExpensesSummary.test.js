import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from "../../components/ExpensesSummary";

test('should render ExpensesSummary with a single expense', () => {
  const expenseCount = 1;
  const expenseTotal = 9434;
  const wrapper = shallow(<ExpensesSummary
    expenseCount={expenseCount}
    expenseTotal={expenseTotal}
  />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
  const expenseCount = 2;
  const expenseTotal = 9434;
  const wrapper = shallow(<ExpensesSummary
    expenseCount={expenseCount}
    expenseTotal={expenseTotal}
  />);

  expect(wrapper).toMatchSnapshot();
});