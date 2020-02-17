import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Header } from 'semantic-ui-react'
import '../../assets/styles.css';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer'

/**
 * TODO: Add Content related to our restaurant such as images/carousel, general description, etc.
 */

export default class Home extends React.Component {
  render() {
    return (
      <div className='deskBackground'>
        <Helmet>
          <title>Home - Ginger Buffet & Grill</title>
        </Helmet>
          <NavigationBar currentPage='home' />

          
          <div className='content'>
          <HolidayMessage />
          <Header
      as="h1"
      content="Welcome to Ginger Buffet and Grill"
      inverted
      style={{
        fontSize:  "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop:  "2.3em",
        'text-shadow': '2px 2px black'
      }}
    />
          </div>
          <Footer currentPage='home'/>
          </div>
          
          
    );
  }
}

