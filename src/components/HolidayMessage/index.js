import React from 'react';
import { Message } from 'semantic-ui-react';
import Axios from 'axios';
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
          request: false
        }
    }

    componentWillMount() {
      if (!this.state.request) {
        let monthsInYear = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let currDate = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
        currDate = new Date(currDate);

        if (currDate.getFullYear() % 4 === 0) {
          daysInMonth[1] = 29;
        }
        let currYear = currDate.getFullYear();
        let currMonth = monthsInYear[currDate.getMonth()];
        let currDay = currDate.getDate();
        let lastMonth = monthsInYear[currDate.getMonth()];
        let lastDay = currDate.getDate();
        let lastYear = currDate.getFullYear();

        for (let i = 0; i < 8; i++) {
          lastDay++;
          if (lastDay >= daysInMonth[currDate.getMonth()]) {
            lastDay = 1;
            if (currDate.getMonth() + 1 >= 12) {
              lastYear++;
              lastMonth = monthsInYear[0];
            } else {
              lastMonth = monthsInYear[currDate.getMonth() + 1]
            }

          }
        }
        let currDayStr = currDay < 10 ? '0'+ String(currDay) : String(currDay);
        let lastDayStr = lastDay < 10 ? '0'+ String(lastDay) : String(lastDay);

        let toFromDateFormat = '&fromDate=14-11-2019&toDate=30-11-2019'
        //let toFromDateFormat = '&fromDate=' + currDayStr + '-' + currMonth + '-' + String(currYear) + '&toDate=' + lastDayStr + '-' + lastMonth + '-' + String(lastYear);
        let objRef = this;
        
        Axios.get(corsBypass + calendarAPIURL + toFromDateFormat + calendarAPIURL2, { crossdomain: true }).then(res => {
          console.log('Received a response!')
          console.log(res);
          let holidays = res.data;
          for (let i = 0; i < holidays.length; i++) {
            if (holidaysCelebrated.includes(holidays[i]["name"][0]["text"])) {
              objRef.setState({
                holiday: holidays[i]["name"][0]["text"],
                request: true
              });
              break;
            }
          }
          

        }).catch( err => {
          console.log('Received an error!');
          console.log(err);
        });
      }
    }

    

    render() {
      if (!this.state.holiday) {
        return (
          <div />
        )
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