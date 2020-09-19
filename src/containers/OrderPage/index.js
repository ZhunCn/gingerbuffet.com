import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Responsive, Segment, Header, Image, Button, Icon, Grid } from 'semantic-ui-react';
import '../../assets/styles.css';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';

const orderLink = 'https://order.gingerbuffet.com/'

const deliveryLink = 'https://www.doordash.com/business/441279/?utm_source=partner-link&utm_medium=website&utm_campaign=441279';

export default class Order extends React.Component {

  toggleModal() {

  }
  render() {
    return (
      <div className='App-background'>
        <Helmet>
          <title>Order - Ginger Buffet & Grill</title>
        </Helmet>

        <NavigationBar currentPage='order' />
        <div className='pagecontent'>
          <HolidayMessage />
      <div className='content-order'>
      <Segment>
        <Header>Would you like to order for Carry-out or Delivery?</Header>
          
            
          <Segment.Inline>
          <Responsive
                        minWidth={Responsive.onlyTablet.minWidth}>
                    <Grid columns={4} padded >
                        <Grid.Row>
                            <Grid.Column />
                            <Grid.Column floated='right'>
                            <Button circular size='massive' href={orderLink} color='orange'>
                                <Icon name='food' />
                                Carry-out
                            </Button>
                            </Grid.Column>
                            <Grid.Column>
                            <Image size='medium' href={deliveryLink} src='https://cdn.doordash.com/media/button/button_red_l.svg'></Image>
                            </Grid.Column>
                            <Grid.Column />
                        </Grid.Row>
                    </Grid>
                    </Responsive>

                    <Responsive
                        {...Responsive.onlyMobile}>
                        <Grid columns={1} >
                        <Grid.Row>
                            <Grid.Column>
                            <Button circular size='massive' href={orderLink} color='orange'>
                                <Icon name='food' />
                                Carry-out
                            </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <Image size='medium' href={deliveryLink} src='https://cdn.doordash.com/media/button/button_red_l.svg'></Image>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Responsive>                        </Segment.Inline>
      </Segment>

        </div>
        </div>
        <Footer currentPage='order' />

      </div>
    );

  }
}

