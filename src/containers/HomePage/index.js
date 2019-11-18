import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Segment } from 'semantic-ui-react'
import './index.css';
import Footer from '../../components/Footer'

/**
 * TODO: Add Content related to our restaurant such as images/carousel, general description, etc.
 */

export default class Home extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='home' />
          <HolidayMessage />
          <div className='content'>
          <Segment>
            Home Page
          </Segment>
          </div>
          <Footer currentPage='home'/>

      </div>
    );
  }
}

