import React from 'react';
import {Button, Header} from 'semantic-ui-react';
import logo from '../../assets/logo.svg';
import './index.css';

function Home() {
    return (
    <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button> fomantic boi</Button>
      </Header>
    );
}

export default Home;
