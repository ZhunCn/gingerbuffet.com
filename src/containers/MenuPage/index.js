import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import './index.css';
import Footer from '../../components/Footer'

/**
 * TODO: Add Take-out/Carry-out Menu with Prices, extracting the information on a csv/xml/json file.
 * Perferably with a Tabbed View on a Grid.
 */

export default class Menu extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='menu' />
          <HolidayMessage />
          Menu Page
          <Footer currentPage='menu' />

      </div>
    );
  }
}

