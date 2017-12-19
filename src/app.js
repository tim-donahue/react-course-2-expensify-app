import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';



import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({description: "Water bill", amount: 4300}));
store.dispatch(addExpense({description: "Gas bill", amount: 12300, createdAt: 1000}));
store.dispatch(addExpense({description: "Rent", amount: 109500}));

// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const currentState = store.getState();
// const visibleExpenses = getVisibleExpenses(currentState.expenses, currentState.filters);
//
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
