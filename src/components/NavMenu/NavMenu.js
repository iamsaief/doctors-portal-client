import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
	return (
		<Navbar bg="light-" expand="lg" className="px-lg-5">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<li className="nav-item">
						<Link to="/" className="nav-link mx-xl-4 mx-2">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/appointment" className="nav-link mx-xl-4 mx-2">
							Appointment
						</Link>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link mx-xl-4 mx-2">
							Dental Service
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link mx-xl-4 mx-2">
							Blog
						</a>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link mx-xl-4 mx-2">
							Login
						</Link>
					</li>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavMenu;
