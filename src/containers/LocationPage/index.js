import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import './index.css';


export default class Location extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='location' />
          <HolidayMessage />
          Location Page
      </div>
    );
  }
}

