import React from 'react';
import { Button, Header, Sidebar } from 'semantic-ui-react';
import logo from '../../assets/logo.svg';
import NavigationBar from '../../components/NavigationBar'
import './index.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className='App-background'>
        <Sidebar.Pushable as='segment'>
          <NavigationBar />
          <Header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <Button> random button</Button>
          </Header>
        </Sidebar.Pushable>
      </div>
    );
  }
}

