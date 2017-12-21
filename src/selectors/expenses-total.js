const selectExpensesTotal = (expenses) => {
  return expenses.reduce(
    (prevVal, elem) => {
      return prevVal + elem.amount;
      },
    0 // Initial Value
  )
};

export default selectExpensesTotal;