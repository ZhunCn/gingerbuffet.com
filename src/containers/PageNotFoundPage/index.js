import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import './index.css';


export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className='App-background'>
          <NavigationBar currentPage='' />
          404 error! No page found here!
      </div>
    );
  }
}

