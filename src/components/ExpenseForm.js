import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const date = moment();
console.log(date.format("MMM D, YYYY"));

export default class ExpenseForm extends React.Component {
    state = {
        amount: '',
        description: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }));
        }

    };
    onDateChange = (createdAt) => {
        this.setState(() => ({
            createdAt
        }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };
    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    >

                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}