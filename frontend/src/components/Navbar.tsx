import React from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { BiHomeSmile } from 'react-icons/bi';
import { IoCreateOutline, IoLogInOutline } from 'react-icons/io5';
import { Link, useMatch } from 'react-router-dom';
// ?? optimize useMatch reuse
const Navbar = () => {
	return (
		<BsNavbar bg="light" expand="md" className="sticky-top navbar-light bg-gradient">
			<Container fluid>
				<BsNavbar.Brand as={Link} to="/">
					ioChat
				</BsNavbar.Brand>
				<BsNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BsNavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							className={
								useMatch('/home')
									? 'disabled text-decoration-underline text-primary fw-bolder'
									: ''
							}
							as={Link}
							to="/home"
						>
							Home
							{useMatch('/home') && (
								<sup>
									<BiHomeSmile />
								</sup>
							)}
						</Nav.Link>
						<Nav.Link
							className={
								useMatch('/login')
									? 'disabled text-decoration-underline text-primary fw-bolder'
									: ''
							}
							as={Link}
							to="/login"
						>
							Login
							{useMatch('/login') && (
								<sup>
									<IoLogInOutline />
								</sup>
							)}
						</Nav.Link>
						<Nav.Link
							className={
								useMatch('/signup')
									? 'disabled text-decoration-underline text-primary fw-bolder'
									: ''
							}
							as={Link}
							to="/signup"
						>
							Register
							{useMatch('/signup') && (
								<sup>
									<IoCreateOutline />
								</sup>
							)}
						</Nav.Link>
					</Nav>
				</BsNavbar.Collapse>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
