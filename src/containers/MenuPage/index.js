import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import './index.css';
import Footer from '../../components/Footer'


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

