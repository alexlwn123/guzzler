import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


const Header = () => {
  return (
    <div>
      <Navbar className="Navbar-wrapper" bg="dark" expand="lg">
        <Navbar.Brand>Guzzler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav varient="pills" className="mr-auto">
          <Navbar.Text>Current Location</Navbar.Text>
        </Nav>
        


      
      </Navbar>
      <h1>Navbar</h1>
    </div>
  )
}

export default Header;
