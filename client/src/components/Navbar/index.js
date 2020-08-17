import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


function Navigation() {
    
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#my-tournaments">My Tournaments</Nav.Link>
                <Nav.Link href="#new-tournament">New Tournament</Nav.Link>
                <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
            </Nav>
            <Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                <Nav.Link href="#deets">New Player Account</Nav.Link>
                <Nav.Link href="#sign-in">Sign In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
        
    )
}

export default Navigation;
