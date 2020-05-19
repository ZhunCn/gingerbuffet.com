import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Icon, Image, Menu, Transition } from 'semantic-ui-react';
import './index.css';
import logo from '../../assets/gingerlogo.png'

const fbPageLink = 'https://www.facebook.com/GingerBuffet';

const orderLink = 'http://order.gingerbuffet.com/'

export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    setVisibility() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
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
            <Menu.Item href={orderLink} target="_blank">
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
                    <Menu.Item className='navbar-item-center'  href='tel:+1618-398-3888'>
                        
            <Icon name='phone' />
                <b>(618)-398-3888</b> <br/><br/><br/><br/>
                 </Menu.Item>

                    <Menu.Item className='navbar-item-center' position='right' onClick={() => this.setVisibility()}>
                        <Icon name='bars' size='big' /> <br/><br/><br/><br/>
                    </Menu.Item>
                    
                </Menu>
                <Transition.Group animation={'fade down'} duration={{hide: 200, show: 400}}>
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
                        <Menu.Item href={orderLink} target="_blank">
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

        );
    }
}