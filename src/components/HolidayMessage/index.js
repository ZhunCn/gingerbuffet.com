import React from 'react';
import { Message } from 'semantic-ui-react';
const holidayPricing = '$12.99';

export default class HolidayMessage extends React.Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
<Message
          >
            <Message.Content>
            <Message.Header>
              Thanksgiving Holiday Special
            </Message.Header>
            <p>
              Happy Thanksgiving Day! We are hosting a special all-day holiday buffet for {holidayPricing}!
            </p>
            </Message.Content>
          </Message>
                    
        );
    }
}