'use client'
import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import Iframe from 'react-iframe';
import { Divider, Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';
import { createMedia } from "@artsy/fresnel";
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer'

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const mapAPIURL = 'https://www.google.com/maps/embed/v1/place?key='
const API_KEY = 'AIzaSyBmMpPd3_6YCY_VlIliOMPfmTazVa3-ahE'
const locationQuery = '&q=Ginger+Buffet,Fairview+Heights+IL'
const orderLink = 'https://order.gingerbuffet.com/'

// const lunchPrice = '$8.29';
// const dinnerPrice = '$11.29';
// const weekendPrice = '$12.29';
const lunchPrice = '';
const dinnerPrice = '';
const weekendPrice = '';

export default class Location extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: false
    }
  }

  toggleModal() {
    this.setState({
      order: !this.state.order
    })
  }

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
        Information about Ginger Buffet and Grill
      </Header>
      <Divider />

      53 Ludwig Drive <br />
      Suite #102 <br />
      Fairview Heights, IL 62208<br />
      <p>
        <b>Phone Number: <a class='no-link-color' href='tel:+1618-398-3888'>(618)-398-3888</a></b></p>
    </Segment>;

    const businessHours =
      <Segment>
        <Header>
          Business Hours
        </Header>
        <Divider />

        <p><Header sub>Sunday - Thursday </Header>
          11:00 AM  -  9:00 PM</p><p>
          <Header sub> Friday and Saturday</Header>
          11:00 AM  -  9:30 PM
        </p>
      </Segment>;
    ;
    const bottomDetails = <>
      <Segment>
        <Header sub>Lunch Buffet: </Header>
        <b>{lunchPrice}</b>
        <Divider />
        <Media greaterThanOrEqual="tablet">
          <br /><br />
        </Media>
        Monday - Friday <br /> 11:00 AM - 3:30 PM
      </Segment>

      <Segment>
        <Header sub>Dinner Buffet:

        </Header>
        <b>{dinnerPrice} </b>
        <Divider />
        <Media greaterThanOrEqual="tablet">
          <br /><br />
        </Media>
        Monday - Thursday <br /> 3:30 PM - 9:00 PM
      </Segment>
      <Segment>
        <Header sub>Weekend Buffet: </Header>
        <b>{weekendPrice} </b>
        <Divider />

        Friday <br /> 3:30 PM - 9:30 PM <br />
        Saturday <br /> 11:00 AM - 9:30 PM <br />
        Sunday <br /> 11:00 AM - 9:00 PM
      </Segment></>;

    const bottomDetailsDesktop = <Segment>
      <Header>
        Buffet Hours
      </Header>
      <Segment.Group horizontal raised>
        {bottomDetails}
      </Segment.Group>
      <b>Senior, Active Military, and Children Buffet Dine-in Discount Available. Senior Special Day on Wednesdays.</b>

    </Segment>;
    const bottomDetailsMobile = <Segment>
      <Header>
        Buffet Hours
      </Header>
      {bottomDetails}
      <b>Senior, Active Military, and Children Buffet<br /> Dine-in Discount Available.<br /><hr />Senior Special Day on Wednesdays.</b>
    </Segment>;



    return (
      <div className='App-background'>
        <Helmet>
          <title>Location and Hours - Ginger Buffet & Grill</title>
        </Helmet>
        <style>{mediaStyles}</style>
        <NavigationBar currentPage='location' order={this.state.order} toggleModal={() => this.toggleModal()} />
        <div className='pagecontent'>
          <Button color='red' circular size='massive' href={orderLink} target="_blank">
            <Icon name='food' />
            Order Now!
          </Button>
          <br /><br />
          <HolidayMessage />
          <br />

          <MediaContextProvider>
            <Grid as={Media} greaterThanOrEqual="tablet" divided='vertically'>
              <Grid.Row columns={2} stretched>
                <Grid.Column stretched>
                  <Grid divided='vertically'>
                    <Grid.Row columns={2} stretched>
                      <Grid.Column stretched width={10}>
                        {businessAddress}
                      </Grid.Column>
                      <Grid.Column stretched width={6}>
                        {businessHours}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {bottomDetailsDesktop}
                </Grid.Column>
                <Grid.Column stretched>
                  {mapDesktopIFrame}
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Media at="mobile" >
              {businessAddress}
              {mapMobileIFrame}
              {bottomDetailsMobile}
              {businessHours}

            </Media>
          </MediaContextProvider>
        </div>

        <Footer currentPage='location' />
      </div>
    );
  }
}
