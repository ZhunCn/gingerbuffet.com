import React from 'react';
import { Message } from 'semantic-ui-react';
import Axios from 'axios';

import Holidays from 'date-holidays';

const holidayPricing = '$12.99';
const corsBypass = 'https://cors-anywhere.herokuapp.com/'
const calendarAPIURL = 'https://kayaposoft.com/enrico/json/v2.0?action=getHolidaysForDateRange'
const calendarAPIURL2 = '&country=usa&region=il&holidayType=public_holiday'
const holidaysCelebrated = [
  "New Year's Day",
  "Valentine's Day",
  "Mother's Day",
  "Father's Day",
  "Independence Day",
  "Thanksgiving Day", // Closed
  "Christmas Day"
]

export default class HolidayMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holiday: null,
      date: null,
      request: false
    }
  }



  componentWillMount() {
    if (!this.state.request) {
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      let currDate = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
      currDate = new Date(currDate);

      if (currDate.getFullYear() % 4 === 0) {
        daysInMonth[1] = 29;
      }
      let currYear = currDate.getFullYear();
      let currMonth = currDate.getMonth();
      let currDay = currDate.getDate();
      let datesStr = [];
      let dates = [];
      for (let i = 0; i < 30; i++) {
        datesStr.push(new Date(currYear, currMonth, currDay, 0, 0, 0).toISOString().substring(0,10));
        dates.push(new Date(currYear, currMonth, currDay, 0, 0, 0));
        currDay++;
        if (currDay >= daysInMonth[currDate.getMonth()]) {
          currDay = 1;
          if (currDate.getMonth() + 1 >= 12) {
            currYear++;
            currMonth = 0;
          } else {
            currMonth = currDate.getMonth() + 1;
          }

        }
      }
      let hd = new Holidays('us', 'il');
    
      
      let arr = hd.getHolidays(currDate.getFullYear());
      console.log(arr);
      console.log(dates);
      for (let i = 0; i < arr.length; i++) {
        if (datesStr.includes(arr[i].date.substring(0,10)) && holidaysCelebrated.includes(arr[i].name)) {
          this.setState({
            holiday: arr[i].name,
            date: dates[datesStr.indexOf(arr[i].date.substring(0,10))],
            request: true
          });
          return;
        }
      }
      if (currDate.getFullYear() != currYear) {
        arr = hd.getHolidays(currYear);
        for (let i = 0; i < arr.length; i++) {
          if (datesStr.includes(arr[i].date.substring(0,10)) && holidaysCelebrated.includes(arr[i].name)) {
            this.setState({
              holiday: arr[i].name,
              date: dates[datesStr.indexOf(arr[i].date.substring(0,10))],
              request: true
            });
            return;
          }
        }
      }

    }
  }



  render() {
    if (!this.state.holiday) {
      return (
        <div />
      )
    }
    if (this.state.holiday === holidaysCelebrated[5]) {
      return (
        <Message
        >
          <Message.Content>
            <Message.Header>
              {this.state.holiday} Holiday Special
              </Message.Header>
            <p>
              Happy {this.state.holiday}! We will be closed for the season on {this.state.date.toLocaleString().substring(0, 10)}!
              </p>
          </Message.Content>
        </Message>
  
      );
    }
    return (
      <Message
      >
        <Message.Content>
          <Message.Header>
            {this.state.holiday} Holiday Special
            </Message.Header>
          <p>
            Happy {this.state.holiday}! We are hosting a special all-day holiday buffet for {holidayPricing}!
            </p>
        </Message.Content>
      </Message>

    );
  }
}