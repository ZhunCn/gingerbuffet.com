'use client'
import React from 'react';
import NavigationBar from '../components/NavigationBar'
import HolidayMessage from '../components/HolidayMessage'
import { Header, Button, Icon } from 'semantic-ui-react'
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer'

const orderLink = 'https://order.gingerbuffet.com/'

export default class Home extends React.Component {
    
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
    return (
      <div className='deskBackground'>
        <Helmet>
          <title>Home - Ginger Buffet & Grill</title>
        </Helmet>
        <NavigationBar currentPage='home' order={this.state.order} toggleModal={() => this.toggleModal()}/>
          <div className='pagecontent'>
          <Button color='red' circular size='massive' href={orderLink} target="_blank">
                        <Icon name='food' />
                        Order Now!
            </Button>
            <br/><br/>
          <HolidayMessage />

          <Header
      as="h1"
      content="Welcome to Ginger Buffet and Grill"
      inverted
      style={{
        color: "#BD0D1D",
        fontSize:  "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop:  "2.5em",
        'text-shadow': '2px 2px black'
      }}
    />
          </div>
          <Footer currentPage='home'/>
          </div>
          
          
    );
  }
}

