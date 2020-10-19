import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class MyNavbar extends Component {
    render() {
        return <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">Song Hunter</Navbar.Brand>
        </Navbar>
      </Container>
    }
}

export default MyNavbar;