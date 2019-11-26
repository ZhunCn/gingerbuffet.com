import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import Iframe from 'react-iframe';
import { Grid, Segment, Header } from 'semantic-ui-react';
import './index.css';
import Footer from '../../components/Footer'

const mapAPIURL = 'https://www.google.com/maps/embed/v1/place?key='
const API_KEY = 'AIzaSyBmMpPd3_6YCY_VlIliOMPfmTazVa3-ahE'
const locationQuery = '&q=Ginger+Buffet,Fairview+Heights+IL'

/**
 * TODO: Add Content related to our restaurant such as Pricing for Buffet, Address, Hours, Map Location
 */

export default class Location extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='location' />
          <div className='content'>
          <HolidayMessage />

          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
          <Segment>
            <Header>
              Ginger Buffet and Grill
            </Header>
            53 Ludwig Drive <br/>
            Suite #102 <br/>
            ​Fairview Heights, IL 62208<br/>
            Phone: (618)-398-3888
          </Segment>
          </Grid.Column>
          <Grid.Column>
          <Iframe 
          url={mapAPIURL + API_KEY + locationQuery}
          width='100%'
          height='450vh'
          />
          </Grid.Column>
          </Grid.Row>
          </Grid>
          </div>
          <Footer currentPage='location' />
      </div>
    );
  }
}

