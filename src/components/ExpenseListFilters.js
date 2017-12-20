import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

export class ExpenseListFilters extends React.Component{
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }));
  };
  onSortChange = (e) => {
    if (e.target.value === 'amount'){
      this.props.sortByAmount();
    } else if (e.target.value === 'date') {
      this.props.sortByDate();
    }
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
