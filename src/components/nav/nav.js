import React from "react";
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./nav.css"
function NavigationBar() {
    return (
      <Navbar bg="black" expand="lg"  >
      <Container style={{ color: 'white' }}>
        <Navbar  style={{  marginRight: '20px', textDecoration: 'none'  }}href="#">Resort Hotel</Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div className="a">
            <Link style={{ color: 'white', marginRight: '20px', textDecoration: 'none'  }}>Home</Link>
            <Link style={{ color: 'white', marginRight: '20px', textDecoration: 'none'  }}>About</Link>
            <Link as={Link} to="/login"  style={{ color: 'white', marginRight: '20px', textDecoration: 'none'  }}>login</Link>
            <NavDropdown title="Hotel"  style={{ color: 'white',marginRight: '230px',display: 'inline-block' }}>
              <NavDropdown.Item href="#action3" >Motel</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Apartment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </div>
          
          <div className="search">
  <input
    type="text"
    className="searchContainer "
    placeholder="Search"
    aria-label="Search"
    aria-describedby="search-button"
  />
  <button
    className="button"
    type="button"
    
  >
    Search
  </button>
</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  export default NavigationBar
  
