import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions to be added
//
// ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => (
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
        }
    );

// REMOVE_EXPENSE

const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
//
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id != action.id );
        default:
            return state;
    }
};

// Filters reducer

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    console.log(store.getState());
});

const expenesOne = store.dispatch(addExpense({description: 'rent', amount: 10000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 200}));

store.dispatch(removeExpense({ id: expenesOne.expense.id }));


const demoState = {
    expenses: [{
        id: 'baefdscas',
        description: 'January Rent',
        note: 'This was the final payment for this address',
        amount: 54588, // In cents
        createdAt: 0 // POSIX Timestamp
    }],
    filters: {
        text: '', // Filter search string
        sortBy: 'amount', // Date or amount
        startDate: undefined, // Timestamp
        endDate: undefined
    }
};
