import React from 'react';
import { Message, Grid, Image } from 'semantic-ui-react';
import Holidays from 'date-holidays';
import coupons from '../../../public/ginger-coupons-Jan2021.png'

//const holidayPricing = '$12.99';
const holidaysCelebrated = [
  "New Year's Day",
  "Valentine's Day",
  "Mother's Day",
  "Father's Day",
  "Independence Day",
  "Thanksgiving Day", // Closed
  "Christmas Day"
];

const covid_19 = false;

const holidaysClosed = [
  "Thanksgiving Day"
]

export default class HolidayMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holiday_list: null,
      date_list: null,
      request: false
    }
  }



  componentDidMount() {
    if (!this.state.request) {
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let holiday_list = [];
      let date_list = [];
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
          holiday_list.push(arr[i].name);
          date_list.push(dates[datesStr.indexOf(arr[i].date.substring(0,10))]);
        }
      }
      if (currDate.getFullYear() !== currYear) {
        arr = hd.getHolidays(currYear);
        for (let i = 0; i < arr.length; i++) {
          if (datesStr.includes(arr[i].date.substring(0,10)) && holidaysCelebrated.includes(arr[i].name)) {
            holiday_list.push(arr[i].name);
            date_list.push(dates[datesStr.indexOf(arr[i].date.substring(0,10))]);
            
          }
        }
      }

      if (holiday_list.length > 0) {
        this.setState({
          holiday_list: holiday_list,
          date_list: date_list,
          request: true
        });
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
              <center><Image size='medium' src={coupons} alt='Current Coupon promotion'/> </center>
            </Grid.Column>
          </Grid.Row>}

        </Grid>
        
        </div>
      );
    }
    if (!this.state.holiday_list) {
      return (
        <div />
      )
    }
    if (this.state.holiday_list.includes(holidaysClosed[0])) {
      return (
        <Message color='violet'
        >
          <Message.Content>
            <Message.Header>
              {this.state.holiday_list[0]} Holiday Closing
              </Message.Header>
            <p>
              Happy {this.state.holiday_list[0]}! We will be closed for the season on {this.state.date_list[0].toLocaleString().substring(0, this.state.date_list[0].toLocaleString().indexOf(','))}!
              </p>
          </Message.Content>
        </Message>
  
      );
    }
    let header = "";
    let message = "";

    if (this.state.holiday_list.includes(holidaysCelebrated[0]) || this.state.holiday_list.includes(holidaysCelebrated[6])) {
      header = "Happy Christmas and New Years Day!";
      message = "Happy holidays! We will be open on December 24th, 25th, 31st, and January 1st.";
    } else {
      header = "Happy " + this.state.holiday_list[0] + "!";
      message = "Happy holidays! We will be open on " + this.state.date_list[0].toLocaleString().substring(0, this.state.date_list[0].toLocaleString().indexOf(',')) + ".";
    }

    return (
      <Message color='violet'
      >
        <Message.Content>
          <Message.Header>
            {header}
            </Message.Header>
          <p>
            {message}
            </p>
        </Message.Content>  
      </Message>

    );
  }
}