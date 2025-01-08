import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar bg="" variant="" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/App">
          <img src="/logo.png" alt="logo" className="logo me-2" />
          <h2>COVER MAKER</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/sza" activeClassName="active">SZA</Nav.Link>
            <Nav.Link as={NavLink} to="/megan-thee-stallion" activeClassName="active">Megan The Stallion</Nav.Link>
            <Nav.Link as={NavLink} to="/taylor-swift" activeClassName="active">Taylor Swift</Nav.Link>
            <Nav.Link as={NavLink} to="/sabrina-carpenter" activeClassName="active">Sabrina Carpenter</Nav.Link>
            <Nav.Link as={NavLink} to="/doja-cat" activeClassName="active">Doja Cat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
