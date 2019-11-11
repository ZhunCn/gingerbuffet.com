import React from 'react';
import  {Link } from 'react-router-dom';
import { Button, Header, Icon, Image, Segment, Sidebar, Menu } from 'semantic-ui-react';
import './index.css';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false
        }
    }
    viewSidebar() {
        this.setState({
            sidebar: !this.state.sidebar
        })
    }

    render() {
        return (
            <div>
                <div className='navbar'>
                    <div className='triple-dash'>
                    <Button onClick={() => this.viewSidebar()} icon><Icon name='bars' /></Button>
                    </div>
                    </div>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => this.viewSidebar()}
                        vertical
                        visible={this.state.sidebar}
                        width='thin'
                    >
                        <Menu.Item as={Link} to={'/'}>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/menu'}>
                            <Icon name='utensil spoon' />
                            Menu
                        </Menu.Item>
                        <Menu.Item as={Link} to={'/location'}>
                            <Icon name='map marked alternate' />
                            Location
                        </Menu.Item>
                    </Sidebar>

                    
            </div>
        );
    }
}