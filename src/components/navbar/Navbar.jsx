import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavbarTop() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Basic Chatroom</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Private Room</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavbarTop
