import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    makeSticky() {
    }

    render() {
        return (
            <Navbar fixedTop className="navbar-white">
                <Navbar.Header pullRight>
                    <Navbar.Brand className="brand">
                        <a href="#home"><img src="logo.png" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight></Nav>
            </Navbar>
        )
    }

}

export default Header
