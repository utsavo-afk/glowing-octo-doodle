import React from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<BsNavbar bg="light" expand="md" className="sticky-top navbar-light bg-gradient">
			<Container fluid>
				<BsNavbar.Brand href="#home">ioChat</BsNavbar.Brand>
				<BsNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BsNavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/signup">
							Create Account
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
						<Nav.Link as={Link} to="/">
							Landing
						</Nav.Link>
					</Nav>
				</BsNavbar.Collapse>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
