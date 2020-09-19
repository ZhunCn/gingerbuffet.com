import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Icon, Image, Menu, Transition, Modal, Button, Grid } from 'semantic-ui-react';
import './index.css';
import logo from '../../assets/gingerlogo-outline.png'

const fbPageLink = 'https://www.facebook.com/GingerBuffet';

const orderLink = 'https://order.gingerbuffet.com/'

const deliveryLink = 'https://www.doordash.com/business/441279/?utm_source=partner-link&utm_medium=website&utm_campaign=441279';

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
        if (this.props.currentPage === 'home') {
            this.props.toggleModal();
        } else if (this.props.currentPage !== 'order') {
            this.setState({
                order: !this.state.order
            })
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
                    <Responsive
                        minWidth={Responsive.onlyTablet.minWidth}>
                        <Grid columns={4} padded >
                            <Grid.Row>
                                <Grid.Column />
                                <Grid.Column floated='right'>
                                    <Button circular size='massive' href={orderLink} color='orange'>
                                        <Icon name='food' />
                                Carry-out
                            </Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Image size='medium' href={deliveryLink} src='https://cdn.doordash.com/media/button/button_red_l.svg'></Image>
                                </Grid.Column>
                                <Grid.Column />
                            </Grid.Row>
                        </Grid>
                    </Responsive>

                    <Responsive
                        {...Responsive.onlyMobile}>
                        <Grid columns={1} >
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
                                    <Image size='medium' href={deliveryLink} src='https://cdn.doordash.com/media/button/button_red_l.svg'></Image>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                </center>
            </Modal.Actions>
        </Modal>;

        return (
            <div>
                <div className='navbar-bg'>
                    <Responsive
                        as={Menu}
                        minWidth={Responsive.onlyTablet.minWidth}
                        fluid
                        inverted
                        pointing
                        secondary
                        className='navbar-menu'
                    >
                        <Menu.Item as={Link} to={'/'}>
                            <Image size='small' src={logo}></Image>
                        </Menu.Item>
                        <Menu.Menu >
                            <Menu.Item as={Link} to={'/'} active={this.props.currentPage === 'home'}>
                                <Icon name='home' />
                        Home
            </Menu.Item>
                            <Menu.Item as={Link} to={'/menu'} active={this.props.currentPage === 'menu'}>
                                <Icon name='utensil spoon' />
                        Menu
            </Menu.Item>
                            <Menu.Item onClick={() => this.toggleModal()} active={this.props.currentPage === 'order'}>
                                <Icon name='food' />
                        Order Online
            </Menu.Item>
                            <Menu.Item as={Link} to={'/location'} active={this.props.currentPage === 'location'}>
                                <Icon name='map marked alternate' />
                        Location and Buffet Prices/Hours
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

                    </Responsive>
                    <Responsive
                        {...Responsive.onlyMobile}
                    >
                        <Menu
                            fluid
                            inverted
                            pointing
                            secondary
                            className='navbar-menu'
                        >
                            <Menu.Item as={Link} to={'/'}>
                                <Image size='small' src={logo}></Image>
                            </Menu.Item>
                            <Menu.Item className='navbar-item-center' href='tel:+1618-398-3888'>

                                <Icon name='phone' />
                                <b>(618)-398-3888</b> <br /><br /><br /><br />
                            </Menu.Item>

                            <Menu.Item className='navbar-item-center' position='right' onClick={() => this.setVisibility()}>
                                <Icon name='bars' size='big' /> <br /><br /><br /><br />
                            </Menu.Item>

                        </Menu>
                        <Transition.Group animation={'fade down'} duration={{ hide: 200, show: 400 }}>
                            {this.state.visible && <Menu
                                fluid
                                inverted
                                pointing
                                secondary
                                stackable>


                                <Menu.Item as={Link} to={'/'} active={this.props.currentPage === 'home'}>
                                    <Icon name='home' />
                            Home
                        </Menu.Item>
                                <Menu.Item as={Link} to={'/menu'} active={this.props.currentPage === 'menu'}>
                                    <Icon name='utensil spoon' />
                            Menu
                        </Menu.Item>
                                <Menu.Item onClick={() => this.toggleModal()} active={this.props.currentPage === 'order'}>
                                    <Icon name='food' />
                        Order Online
            </Menu.Item>
                                <Menu.Item as={Link} to={'/location'} active={this.props.currentPage === 'location'}>
                                    <Icon name='map marked alternate' />
                            Location and Buffet Prices/Hours
                        </Menu.Item>
                                <Menu.Item href={fbPageLink} target="_blank">
                                    <Icon name='facebook square' />
                            Facebook Page
                        </Menu.Item>
                            </Menu>}
                        </Transition.Group>
                    </Responsive>
                </div>
                {modal}
            </div>
        );
    }
}