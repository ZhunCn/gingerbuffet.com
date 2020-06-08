import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Tab, Image, Button } from 'semantic-ui-react';
import '../../assets/styles.css';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import menuTop from '../../assets/ginger-menu-top.png';
import menuBottom from '../../assets/ginger-menu-bottom.png';
import expressSushi from '../../assets/ginger-express-menu-sushi.jpg';
import menuPDF from '../../assets/ginger-menu.pdf';
import expressPDF from '../../assets/ginger-express-menu-sushi.pdf';

/**
 * TODO: Add Take-out/Carry-out Menu with Prices, extracting the information on a csv/xml/json file.
 * Preferably with a Tabbed View on a Grid.
 */

export default class Menu extends React.Component {
  render() {
    // eslint-disable-next-line
    const standardMenu = <div><Button basic color='black' href={menuPDF}>PDF version</Button> <br/><br/>
      <Image.Group className='menu-pics'>
      <Image src={menuTop} fluid />
      <br />
      <Image src={menuBottom} fluid />
    </Image.Group></div>;

      const expressMenu = <div><Button basic color='black' href={expressPDF}>PDF version</Button>
      <Image.Group className='menu-pics'>
        <Image src={expressSushi} fluid />
    </Image.Group></div>;

    const panes = [
      {
        menuItem: 'Standard Take-out',
        render: () => <Tab.Pane >{standardMenu}</Tab.Pane>,
      },
      {
        menuItem: 'NEW! Sushi Express',
        render: () => <Tab.Pane >{expressMenu}</Tab.Pane>,
      }
    ];
    return (
      <div className='App-background'>
        <Helmet>
          <title>Menu - Ginger Buffet & Grill</title>
        </Helmet>

        <NavigationBar currentPage='menu' />
        <div className='pagecontent'>
          <HolidayMessage />
          <Tab menu={{ attached: true, tabular: true }} panes={panes} />


        </div>
        <Footer currentPage='menu' />

      </div>
    );

  }
}

