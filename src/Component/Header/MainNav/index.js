import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

/**
* @author
* @function MainNav
**/

const MainNav = (props) => {
    return (
        <header className="header-area header-sticky">
            <Container>
                <Row>
                    <Col md={12}>
                        <Navbar collapseOnSelect className="main-nav">
                            <Navbar.Brand href="#home" className="logo">Training<em> Studio</em></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">About</Nav.Link>
                                    <Nav.Link href="#our-classes">Classes</Nav.Link>
                                    <Nav.Link href="#schedule">Schedules</Nav.Link>
                                    <Nav.Link href="#contact-us">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <div className="main-button"><a href="#">Sign Up</a></div>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    )

}

export default MainNav