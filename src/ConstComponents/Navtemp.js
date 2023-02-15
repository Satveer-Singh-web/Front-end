import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navtemp = () => {
  return (
    <>
    <Navbar bg="light" expand="lg"> 
      <Container>
        <Navbar.Brand href="#home">Crispy Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/story">Story</Link>
            <Link className='nav-link' to="/menu">Menu</Link>
            <Link className='nav-link' to="/updates">Updates</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navtemp