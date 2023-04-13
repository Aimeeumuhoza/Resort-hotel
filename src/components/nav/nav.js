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
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Resort Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
            <NavDropdown title="Hotel" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Motel</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Apartment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  export default NavigationBar
  
