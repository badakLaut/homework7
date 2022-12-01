import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function navbar() {
	return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <img src={'https://www.erajaya.com/assets/img/logo.png'}
				     style={{height: 35, width: 63}}
				     alt={'logo'}/>
            <Nav className="me-auto">
                <Nav.Link href="#">ABOUT US</Nav.Link>                    
                <Nav.Link href="#">CORPORATE GOVERNANCE</Nav.Link>
                <Nav.Link href="#">SUBSIDIARIES & AFFILIATE</Nav.Link>                    
                <Nav.Link href="#">INVESTOR RELATIONS</Nav.Link>
                <Nav.Link href="#">SOCIAL AND EVENT</Nav.Link>                    
                <Nav.Link href="#">E-COMMERCE</Nav.Link>
                <Nav.Link href="#">EN</Nav.Link>                    
            </Nav>
            </Container>
        </Navbar>
	)
}

export default navbar;