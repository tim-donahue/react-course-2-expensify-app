import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({description: "Water bill", amount: 4300}));
store.dispatch(addExpense({description: "Gas bill", amount: 12300}));

store.dispatch(setTextFilter('water'));

const currentState = store.getState();
const visibleExpenses = getVisibleExpenses(currentState.expenses, currentState.filters);

console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
