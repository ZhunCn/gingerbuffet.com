import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Icon, Image, Menu } from 'semantic-ui-react';
import './index.css';
import logo from '../../assets/gingerlogo.png'
export default class Footer extends React.Component {

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
            <div className='invisible'>
                <Menu
                    size='mini'
                    secondary
                    inverted
                    className='footer'
                >

                    <Menu.Item as={Link} to={'/'} disabled={this.props.currentPage === 'home'}>
                        Home
            </Menu.Item>
                    <Menu.Item as={Link} to={'/menu'} disabled={this.props.currentPage === 'menu'}>
                        Menu
            </Menu.Item>
                    <Menu.Item as={Link} to={'/location'} disabled={this.props.currentPage === 'location'}>
                        Location
            </Menu.Item>

                
            </Menu>
            </div>
        );
    }
}