import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div>
      {
        expenseCount > 0 && (
          <h2>
            Viewing {expenseCount} {expenseWord} totaling {formattedTotal}
          </h2>
        )
      }
    </div>
  );
};


const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
  expenseCount: visibleExpenses.length,
  expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);