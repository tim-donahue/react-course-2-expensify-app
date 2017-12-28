import {
  addExpense, editExpense, removeExpense, setExpenses, startAddExpense, startEditExpense, startRemoveExpense,
  startSetExpenses
} from "../../actions/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt
    };
  });
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => { done(); });
});

test('should setup removeExpense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    id: '123abc',
    type: 'REMOVE_EXPENSE'
  });
});

test('should remove expenses from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;

  store.dispatch(startRemoveExpense({id}))
    .then(() => {
      const action = store.getActions()[0];
      expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });

      return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toBeNull();
      done();
    }
  );
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

test('should edit expense from firebase', () => {
  const store = createMockStore({});
  const id = expenses[2].id;
  const update = {
    amount: 99899,
    note: "Just a note"
  };

  store.dispatch(startEditExpense(id, update))
});

test('should setup addExpense action object with provided values', () => {
  const expenseData = expenses[1];
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenseData
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'Big improvement over broken mouse',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions.length).toBe(1);
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });


    return database.ref(`expenses/${actions[0].expense.id}`).once('value')

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense(expenseDefaults)).then(() => {
    const actions = store.getActions();

    expect(actions.length).toBe(1);
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });


    return database.ref(`expenses/${actions[0].expense.id}`).once('value')

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

test('should setup set expense action object', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
