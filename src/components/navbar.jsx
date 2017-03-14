import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class MyNavbar extends Component {
    render() {
        return <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Song Hunter</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>
    }
}

export default MyNavbar;