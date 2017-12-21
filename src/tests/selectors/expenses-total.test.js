import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly add up a single expense', () => {
  const testExpenses = [ expenses[1] ];
  const expectedResult = expenses[1].amount;
  const action = selectExpensesTotal(testExpenses);

  expect(action).toBe(expectedResult);
});

test('should correctly add up multiple expenses', () => {
  const expectedResult = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const action = selectExpensesTotal(expenses);

  expect(action).toBe(expectedResult);
});