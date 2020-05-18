import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Tab, Image } from 'semantic-ui-react';
import '../../assets/styles.css';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import menuTop from '../../assets/ginger-menu-top.png';
import menuBottom from '../../assets/ginger-menu-bottom.png';
import expressSushi from '../../assets/ginger-express-menu-sushi.jpg';
import expressCombo from '../../assets/ginger-express-menu-combo.jpg';
/**
 * TODO: Add Take-out/Carry-out Menu with Prices, extracting the information on a csv/xml/json file.
 * Perferably with a Tabbed View on a Grid.
 */

export default class Menu extends React.Component {
  render() {
    // eslint-disable-next-line
    const standardMenu = <Image.Group className='menu-pics'>
      <Image src={menuTop} fluid />
      <br />
      <Image src={menuBottom} fluid />
    </Image.Group>;

    const expressMenu = <Image.Group className='menu-pics'>
      <Image src={expressCombo} fluid />
      <br />
      <Image src={expressSushi} fluid />
    </Image.Group>;

    const panes = [
      {
        menuItem: 'NEW! Combo Express',
        render: () => <Tab.Pane attached={false}>{expressMenu}</Tab.Pane>,
      },
      {
        menuItem: 'Standard Take-out',
        render: () => <Tab.Pane attached={false}>{standardMenu}</Tab.Pane>,
      }
    ];
    return (
      <div className='App-background'>
        <Helmet>
          <title>Menu - Ginger Buffet & Grill</title>
        </Helmet>

        <NavigationBar currentPage='menu' />
        <div className='content'>
          <HolidayMessage />
          <Tab menu={{ pointing: true }} panes={panes} />


        </div>
        <Footer currentPage='menu' />

      </div>
    );

  }
}

