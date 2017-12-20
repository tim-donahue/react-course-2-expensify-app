import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { EditExpensePage } from "../../components/EditExpensePage";

let wrapper, expense, history, editExpense, removeExpense;

beforeEach(() => {
  expense = expenses[2];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expense}
    />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should get expense from editExpense and history push to home', () =>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should get expense id from removeExpense and history push to home', () =>{
  wrapper.find('button').simulate('click');

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith( {id: expense.id} );
});
