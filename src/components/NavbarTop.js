import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarTop() {
    return (
        <div>
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">TextUtils</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavbarTop;