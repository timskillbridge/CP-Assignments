import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import "./App.css";

export default function App() {



  return (
    <>

<Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>

            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/Hangman">Hangman</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/whack-a-mole">Whack-a-...Mole?</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="APIs and useState" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/Pokemon-Theme-Team-Master">Pokemon-Theme-Team</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to='/mute-speaker'>Mute the Speaker</Link></NavDropdown.Item>
            </NavDropdown>

{/* 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link */}
              {/* </NavDropdown.Item> */}
             
             <NavDropdown title="CSS and Design" id="basic-nav-dropdown">
             <NavDropdown.Item><Link to='/tailwind'>Basic Tailwind</Link></NavDropdown.Item>
             <NavDropdown.Item><Link to='/basic-design'>Basic CSS</Link></NavDropdown.Item>
             </NavDropdown>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
    </>
  );
}


