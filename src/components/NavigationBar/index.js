import React from 'react';
import  { Link } from 'react-router-dom';
import { Icon, Image,Menu } from 'semantic-ui-react';
import './index.css';
import logo from '../../assets/gingerlogo.png'
export default class NavigationBar extends React.Component {

    render() {
        return (
                    
                    <Menu
                        inverted
                        pointing
                        secondary
                        className='navbar-menu'
                    >
                        <Menu.Item as={Link} to={'/'}>
                            <Image size='small' src={logo}></Image>
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/'} active={this.props.currentPage === 'home'}>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/menu'} active={this.props.currentPage === 'menu'}>
                            <Icon name='utensil spoon' />
                            Menu
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/location'} active={this.props.currentPage === 'location'}>
                            <Icon name='map marked alternate' />
                            Location
                        </Menu.Item>
                    </Menu>
                    
        );
    }
}