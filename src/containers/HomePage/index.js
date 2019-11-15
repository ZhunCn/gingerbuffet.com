import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import './index.css';


export default class Home extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='home' />
          <HolidayMessage />
          Home Page
      </div>
    );
  }
}

