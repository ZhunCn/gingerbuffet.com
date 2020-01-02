import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import '../../assets/styles.css';
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
        <Segment size='large' raised>404 error! No page found here!</Segment>
      </div>
    );
  }
}

