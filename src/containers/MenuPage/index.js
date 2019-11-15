import React from 'react';
import { Button, Header, Message, Icon } from 'semantic-ui-react';
import logo from '../../assets/logo.svg';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import './index.css';


export default class Menu extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='menu' />
          <HolidayMessage />
          Menu Page
      </div>
    );
  }
}

