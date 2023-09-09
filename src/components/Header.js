import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={"/"}>Korean Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Selling</Nav.Link>
                            <Nav.Link href={"/productRegister"}>Product Post</Nav.Link>
                            <Nav.Link>
                                Job
                            </Nav.Link>
                            <NavDropdown title="English" id="basic-nav-dropdown">
                                <NavDropdown.Item >Korean</NavDropdown.Item>
                                <NavDropdown.Item > Japanese</NavDropdown.Item>
                                <NavDropdown.Item >Chinese</NavDropdown.Item>
                            </NavDropdown>
                            )}
                            <Nav.Link  href={"/signup"}>Signup</Nav.Link>
                            <Nav.Link  href={"/login"}>
                                Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;