import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import './index.css';
import Footer from '../../components/Footer'

/**
 * TODO: Add Content related to our restaurant such as Pricing for Buffet, Address, Hours, Map Location
 */

export default class Location extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='location' />
          <HolidayMessage />
          Location Page
          <Footer currentPage='location' />
      </div>
    );
  }
}

