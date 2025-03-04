'use client'
import React from 'react';
import NavigationBar from '../components/NavigationBar'
import { Segment } from 'semantic-ui-react'
import { Helmet } from 'react-helmet';


export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className='App-background'>
        <Helmet>
          <title>404 Error - Ginger Buffet & Grill</title>
        </Helmet>
        <NavigationBar currentPage='' />
        <div className='pagecontent'>
          <Segment size='large' raised>404 error! This page was not found!</Segment>
        </div>
      </div>
    );
  }
}

