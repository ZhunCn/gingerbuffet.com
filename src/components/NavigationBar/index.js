import React from 'react';
import { Link } from 'next/link';
import { Icon, Image, Menu, Transition, Modal, Button, Grid } from 'semantic-ui-react';
import { createMedia } from "@artsy/fresnel";
import './index.css';
import logo from '../../../public/gingerlogo-outline.png'
import grubhub from '../../../public/grubhub.png'

const AppMedia = createMedia({
    breakpoints: {
        mobile: 320,
        tablet: 768,
        computer: 992,
        largeScreen: 1200,
        widescreen: 1920
    }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const fbPageLink = 'https://www.facebook.com/GingerBuffet';

const orderLink = 'https://order.gingerbuffet.com/'

const deliveryLink = 'https://www.doordash.com/business/441279/?utm_source=partner-link&utm_medium=website&utm_campaign=441279';

const deliveryLink2 = 'https://grubhub.com/restaurant/ginger-buffet-and-grill-53-ludwing-dr.-fairview-heights/2364864?classicAffiliateId=%2Fr%2Fw%2F2364864%2F&utm_source=restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=2364864'

export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            order: this.props.order !== null ? this.props.order : false
        }
    }

    componentDidUpdate() {
        if (this.props.order !== null && this.props.order !== this.state.order) {
            this.setState({
                order: this.props.order !== null ? this.props.order : false
            })
        }
    }

    setVisibility() {
        this.setState({
            visible: !this.state.visible
        })
    }

    toggleModal() {
        if (this.props.currentPage !== 'order') {
            this.props.toggleModal();
        }
    }

    render() {
        const modal = <Modal size='fullscreen' closeIcon basic dimmer='blurring' open={this.state.order} onClose={() => this.toggleModal()}>
            <Modal.Header><center>Order Online</center></Modal.Header>
            <Modal.Content>
                <center>Would you like to order for Carry-out or Delivery?</center>
            </Modal.Content>
            <Modal.Actions>
                <center>
                    <Grid as={Media} greaterThanOrEqual="tablet" columns={5} padded >
                        <Grid.Row>
                            <Grid.Column />
                            <Grid.Column floated='right'>
                                <Button circular size='massive' href={orderLink} color='orange'>
                                    <Icon name='food' />
                                    Carry-out
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Image size='medium' href={deliveryLink} src='https://cdn.doordash.com/media/button/button_red_l.svg' alt='Button to redirect to DoorDash order page'></Image>
                            </Grid.Column>
                            <Grid.Column>
                                <Image size='medium' href={deliveryLink2} src={grubhub.src} alt='Button to redirect to GrubHub order page'></Image>
                            </Grid.Column>
                            <Grid.Column />
                        </Grid.Row>
                    </Grid>

                    <Grid as={Media} at="mobile" columns={1} >
                        <Grid.Row>
                            <Grid.Column>
                                <Button circular size='massive' href={orderLink} color='orange'>
                                    <Icon name='food' />
                                    Carry-out
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image size='medium' href={deliveryLink} src='https://cdn.doordash.com/media/button/button_red_l.svg' alt='Button to redirect to DoorDash order page'></Image>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Image size='medium' href={deliveryLink2} src={grubhub.src} alt='Button to redirect to GrubHub order page'></Image>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </center>
            </Modal.Actions>
        </Modal>;

        return (
            <div>
                <style>{mediaStyles}</style>
                <MediaContextProvider>
                    <div className='navbar-bg'>
                        <Menu
                            as={Media}
                            greaterThanOrEqual="tablet"
                            fluid
                            inverted
                            pointing
                            secondary
                            className='navbar-menu'
                        >
                            <Menu.Item as={Link} href='/'>
                                <Image size='small' src={logo.src} alt='Ginger Buffet company logo'></Image>
                            </Menu.Item>
                            <Menu.Menu >
                                <Menu.Item as={Link} href='/' active={this.props.currentPage === 'home'}>
                                    <Icon name='home' />
                                    Home
                                </Menu.Item>
                                <Menu.Item as={Link} href='/menu' active={this.props.currentPage === 'menu'}>
                                    <Icon name='utensil spoon' />
                                    Menu
                                </Menu.Item>
                                <Menu.Item href={orderLink} target="_blank" active={this.props.currentPage === 'order'}>
                                    <Icon name='food' />
                                    Order Online
                                </Menu.Item>
                                <Menu.Item as={Link} href='/location' active={this.props.currentPage === 'location'}>
                                    <Icon name='map marked alternate' />
                                    Location and Buffet Hours
                                </Menu.Item>
                                <Menu.Item href={fbPageLink} target="_blank">
                                    <Icon name='facebook square' />
                                    Facebook Page
                                </Menu.Item>
                                <Menu.Item href='tel:+1618-398-3888'>

                                    <Icon name='phone' />
                                    <b>(618)-398-3888</b>
                                </Menu.Item>
                            </Menu.Menu>

                        </Menu>
                        <Media at="mobile">
                            <center>
                                <Image className='.navbar-item-center' as={Link} to={'/'} size='medium' src={logo.src} alt='Ginger Buffet company logo'></Image>
                            </center>

                            <Menu
                                fluid
                                inverted
                                pointing
                                secondary
                                className='navbar-menu'
                            >
                                <Menu.Item position='left' href='tel:+1618-398-3888'>
                                    <div className='phone-number-text'>
                                        <Icon name='phone' />
                                        <b>(618)-398-3888</b> <br />
                                    </div>
                                </Menu.Item>
                                <Menu.Item className='navbar-item-center' position='right' onClick={() => this.setVisibility()}>
                                    <div className='dropdown-menu-bigger'>Menu </div><Icon name='bars' size='big' />
                                </Menu.Item>
                            </Menu>

                            <Transition.Group animation={'fade down'} duration={{ hide: 200, show: 400 }}>
                                {this.state.visible && <Menu
                                    fluid
                                    inverted
                                    pointing
                                    secondary
                                    stackable>
                                    <Menu.Item as={Link} href='/' active={this.props.currentPage === 'home'}>
                                        <Icon name='home' />
                                        <div className='dropdown-menu-bigger'>Home</div>
                                    </Menu.Item>
                                    <Menu.Item as={Link} href='/menu' active={this.props.currentPage === 'menu'}>
                                        <Icon name='utensil spoon' />
                                        <div className='dropdown-menu-bigger'>Menu </div>
                                    </Menu.Item>
                                    <Menu.Item href={orderLink} target="_blank" active={this.props.currentPage === 'order'}>
                                        <Icon name='food' />
                                        <div className='dropdown-menu-bigger'>Order Online </div>
                                    </Menu.Item>
                                    <Menu.Item as={Link} href='/location' active={this.props.currentPage === 'location'}>
                                        <Icon name='map marked alternate' />
                                        <div className='dropdown-menu-bigger'>Location and Buffet Hours </div>
                                    </Menu.Item>
                                    <Menu.Item href={fbPageLink} target="_blank">
                                        <Icon name='facebook square' />
                                        <div className='dropdown-menu-bigger'>Facebook Page </div>
                                    </Menu.Item>
                                </Menu>}
                            </Transition.Group>
                        </Media>
                    </div>
                    {modal}
                </MediaContextProvider>
            </div>
        );
    }
}