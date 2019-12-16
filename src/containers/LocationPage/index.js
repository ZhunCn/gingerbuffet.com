import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import Iframe from 'react-iframe';
import { Divider, Container, Grid, Segment, Header, Responsive } from 'semantic-ui-react';
import './index.css';
import Footer from '../../components/Footer'

const mapAPIURL = 'https://www.google.com/maps/embed/v1/place?key='
const API_KEY = 'AIzaSyBmMpPd3_6YCY_VlIliOMPfmTazVa3-ahE'
const locationQuery = '&q=Ginger+Buffet,Fairview+Heights+IL'

const lunchPrice = '$8.29';
const dinnerPrice = '$11.29';
const weekendPrice = '$12.29';

/**
 * TODO: Add Content related to our restaurant such as Pricing for Buffet, Address, Hours, Map Location
 */

export default class Location extends React.Component {
  render() {
    const mapDesktopIFrame = <Iframe
      url={mapAPIURL + API_KEY + locationQuery}
      width='100%'
      height='450vh'
      className='roundElement'
    />;
    const mapMobileIFrame = <Iframe
      url={mapAPIURL + API_KEY + locationQuery}
      width='100%'
      height='250vh'
      className='roundElement'
    />;

    const businessAddress = <Segment>
      <Header>
       Contact Information for Ginger Buffet and Grill
      </Header>
      <Divider/>

      53 Ludwig Drive <br />
      Suite #102 <br />
      Fairview Heights, IL 62208<br />
      <p>
      Phone Number: (618)-398-3888</p>
      </Segment>;

    const businessHours =
      <Segment>
        <Header>
          Business Hours
      </Header>
      <Divider/>

        <p><Header sub>Sunday - Thursday </Header>
        11:00 AM  -  9:00 PM</p><p>
      <Header sub> Friday and Saturday</Header>
        11:00 AM  -  9:30 PM
        </p>
      </Segment>;
    ;
    const square = { width: 175, height: 175 }
    const bottomDetails = <Segment>
      <Header>
        Buffet Prices
        </Header>
      <Segment.Group horizontal>
        <Segment>
          <Header sub>Lunch Buffet: </Header>
          <b>{lunchPrice}</b>
          <Divider />
          <br /> <br />
          Monday - Friday <br /> 11:00 AM - 3:30 PM
          </Segment>
        <Segment>
          <Header sub>Dinner Buffet:

           </Header>
          <b>{dinnerPrice} </b>
          <Divider />
          <br /> <br />
          Monday - Thursday <br /> 3:30 PM - 9:00 PM
          </Segment>
        <Segment>
          <Header sub>Weekend Buffet: </Header>
          <b>{weekendPrice} </b>
          <Divider />

          Friday <br /> 3:30 PM - 9:30 PM <br />
          Saturday <br /> 11:00 AM - 9:30 PM <br />
          Sunday <br /> 11:00 AM - 9:00 PM
          </Segment>
      </Segment.Group>
    </Segment>
    return (
      <div className='App-background'>
        <NavigationBar currentPage='location' />
        <div className='content'>

          <HolidayMessage />
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>


            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                      <Grid.Column stretched width={10}>
                        {businessAddress}
                      </Grid.Column>
                      <Grid.Column stretched width={6}>
                        {businessHours}
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {bottomDetails}
                </Grid.Column>
                <Grid.Column>
                  {mapDesktopIFrame}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>

          <Responsive {...Responsive.onlyMobile} >
          <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                      <Grid.Column stretched width={10}>
                        {businessAddress}
                      </Grid.Column>
                      <Grid.Column stretched width={6}>
                        {businessHours}
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>

            {mapMobileIFrame}
            {bottomDetails}
          </Responsive>
        </div>

        <Footer currentPage='location' />
      </div>
    );
  }
}

