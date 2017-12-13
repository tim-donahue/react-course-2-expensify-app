import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'baefdscas',
        description: 'January Rent',
        note: 'This was the final payment for this address',
        amount: 54588, // In cents
        createdAt: 0 // POSIX Timestamp
    }],
    filters: {
        text: 'rent', // Filter search string
        sortBy: 'amount', // Date or amount
        startDate: undefined, // Timestamp
        endDate: undefined
    }
};