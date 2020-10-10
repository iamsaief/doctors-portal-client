import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavMenu.css";

const NavMenu = () => {
	return (
		<Navbar bg="light-" expand="lg" className="px-lg-5">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home" className="mx-xl-4 mx-2">
						Home
					</Nav.Link>
					<Nav.Link href="#link" className="mx-xl-4 mx-2">
						About
					</Nav.Link>
					<Nav.Link href="#link" className="mx-xl-4 mx-2">
						Dental Service
					</Nav.Link>
					<Nav.Link href="#link" className="mx-xl-4 mx-2">
						Review
					</Nav.Link>
					<Nav.Link href="#link" className="mx-xl-4 mx-2">
						Blog
					</Nav.Link>
					<Nav.Link href="#link" className="mx-xl-4 mx-2">
						Contact us
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavMenu;
