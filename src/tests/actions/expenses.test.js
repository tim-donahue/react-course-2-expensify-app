import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup removeExpense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    id: '123abc',
    type: 'REMOVE_EXPENSE'
  });
});

test('should setup editExpense action object', () => {
  const action = editExpense('abc123', {amount: 1000, description: 'some description'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      amount: 1000,
      description: 'some description'
    }
  })
});

test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense action object with default values', () => {
  const expenseDefaultData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  };

  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDefaultData,
      id: expect.any(String)
    }
  });
});