
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// https://react.rocks/example/react-datepicker

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <h1>Date Picker App</h1>

        <DatePicker
          dateFormat="YYYY/MM/DD"
          selected={this.state.startDate}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
