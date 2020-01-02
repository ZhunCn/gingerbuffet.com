import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Tab, Image } from 'semantic-ui-react';
import '../../assets/styles.css';
import Footer from '../../components/Footer'
import menuTop from '../../assets/ginger-menu-top.png';
import menuBottom from '../../assets/ginger-menu-bottom.png';

/**
 * TODO: Add Take-out/Carry-out Menu with Prices, extracting the information on a csv/xml/json file.
 * Perferably with a Tabbed View on a Grid.
 */

export default class Menu extends React.Component {
  render() {
    // eslint-disable-next-line
    const panes = [
      {
        menuItem: 'Appetizers',
        render: () => <Tab.Pane attached={false}>Appetizers</Tab.Pane>,
      },
      {
        menuItem: 'Soup',
        render: () => <Tab.Pane attached={false}>Soup</Tab.Pane>,
      },
      {
        menuItem: 'Rice',
        render: () => <Tab.Pane attached={false}>Rice</Tab.Pane>,
      },
    ];
    return (
      <div className='App-background'>
          <NavigationBar currentPage='menu' />
          <div className='content'>
          <HolidayMessage />
          <Image.Group>
            <Image src={menuTop} />
            <Image src={menuBottom} />
          </Image.Group>

          </div>
          <Footer currentPage='menu' />

      </div>
    );
    //<Tab menu={{ pointing: true }} panes={panes} />
  }
}

