import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HolidayMessage from '../../components/HolidayMessage'
import { Image, Button, Icon } from 'semantic-ui-react';
import '../../assets/styles.css';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import menuTop from '../../assets/ginger-menu-top.jpg';
import menuBottom from '../../assets/ginger-menu-bottom.jpg';
import menuPDF from '../../assets/ginger-menu.pdf';
// import expressSushi from '../../assets/ginger-express-menu-sushi.jpg';
// import expressPDF from '../../assets/ginger-express-menu-sushi.pdf';

const orderLink = 'https://order.gingerbuffet.com/'


export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: false
    }
  }

  toggleModal() {
    this.setState({
      order: !this.state.order
    })
  }
  
  render() {
    // eslint-disable-next-line
    const standardMenu = <div><Button color='black' href={menuPDF}>PDF version</Button> <br/><br/>
      <Image.Group className='menu-pics'>
      <Image src={menuTop} fluid />
      <br />
      <Image src={menuBottom} fluid />
    </Image.Group></div>;

    //   const expressMenu = <div><Button basic color='black' href={expressPDF}>PDF version</Button>
    //   <Image.Group className='menu-pics'>
    //     <Image src={expressSushi} fluid />
    // </Image.Group></div>;

    // const panes = [
    //   {
    //     menuItem: 'Standard Take-out',
    //     render: () => <Tab.Pane >{standardMenu}</Tab.Pane>,
    //   },
    //   {
    //     menuItem: 'NEW! Sushi Express',
    //     render: () => <Tab.Pane >{expressMenu}</Tab.Pane>,
    //   }
    // ];
    return (
      <div className='App-background'>
        <Helmet>
          <title>Menu - Ginger Buffet & Grill</title>
        </Helmet>

        <NavigationBar currentPage='menu' order={this.state.order} toggleModal={() => this.toggleModal()}/>
          <div className='pagecontent'>
          <Button color='red' circular size='massive' href={orderLink} target="_blank">
                        <Icon name='food' />
                        Order Now!
            </Button>
            <br/><br/>
          <HolidayMessage />
          <br/>
          {standardMenu}


        </div>
        <Footer currentPage='menu' />

      </div>
    );

  }
}

