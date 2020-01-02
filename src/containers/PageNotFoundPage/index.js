import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import '../../assets/styles.css';
import { Segment } from 'semantic-ui-react'


export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='' />
          <Segment size='large' raised>404 error! No page found here!</Segment>
      </div>
    );
  }
}

