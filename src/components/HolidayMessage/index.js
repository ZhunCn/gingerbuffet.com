import React from 'react';
import { Message, Grid, Image } from 'semantic-ui-react';
import Holidays from 'date-holidays';
import coupons from '../../assets/ginger-coupons-Jan2021.png'

const holidayPricing = '$12.99';
const holidaysCelebrated = [
  "New Year's Day",
  "Valentine's Day",
  "Mother's Day",
  "Father's Day",
  "Independence Day",
  "Thanksgiving Day", // Closed
  "Christmas Day"
];

const covid_19 = true;

const holidaysClosed = [
  "Thanksgiving Day"
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



  componentDidMount() {
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
      for (let i = 0; i < 15; i++) {
        datesStr.push(new Date(currYear, currMonth, currDay, 0, 0, 0).toISOString().substring(0,10));
        dates.push(new Date(currYear, currMonth, currDay, 0, 0, 0));
        currDay++;
        if (currDay >= daysInMonth[currDate.getMonth()]) {
          currDay = 1;
          if (currDate.getMonth() + 1 >= 12) {
            currYear++;
            currMonth = 0;
          } else {
            currMonth = currMonth + 1;
          }

        }
      }
      let hd = new Holidays('us', 'il');
    
      
      let arr = hd.getHolidays(currDate.getFullYear());
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
      if (currDate.getFullYear() !== currYear) {
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
    if (covid_19) {
      return (<div>
        <Grid columns={1}>
          <Grid.Row>

            <Grid.Column>
            <Message color='violet'>
              <Message.Content>
                <h1>
                Now Open for Dine-In Buffet!
                </h1>
            </Message.Content>
            </Message>
            </Grid.Column>
          </Grid.Row>
          {false && <Grid.Row>
            <Grid.Column>
              <center><Image size='medium' src={coupons} /> </center>
            </Grid.Column>
          </Grid.Row>}

        </Grid>
        
        </div>
      );
    }
    if (!this.state.holiday) {
      return (
        <div />
      )
    }
    if (holidaysClosed.includes(this.state.holiday)) {
      return (
        <Message color='violet'
        >
          <Message.Content>
            <Message.Header>
              {this.state.holiday} Holiday Closing
              </Message.Header>
            <p>
              Happy {this.state.holiday}! We will be closed for the season on {this.state.date.toLocaleString().substring(0, this.state.date.toLocaleString().indexOf(','))}!
              </p>
          </Message.Content>
        </Message>
  
      );
    }
    return (
      <Message color='violet'
      >
        <Message.Content>
          <Message.Header>
            {this.state.holiday} Holiday Special
            </Message.Header>
          <p>
            Happy {this.state.holiday}! On {this.state.date.toLocaleString().substring(0, this.state.date.toLocaleString().indexOf(','))}
            , We are hosting a special all-day holiday buffet for <b>{holidayPricing}</b>!
            </p>
        </Message.Content>
      </Message>

    );
  }
}