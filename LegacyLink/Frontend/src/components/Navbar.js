import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Toggle the menu open/close on small screens
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<h1 className="navbar-brand">Alumni Network</h1>

			{/* Hamburger Menu for mobile */}
			<div className="hamburger-menu" onClick={toggleMenu}>
				<div></div>
				<div></div>
				<div></div>
			</div>

			{/* Navbar Links */}
			<ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/alumni-directory">Alumni Directory</Link>
				</li>
				<li>
					<Link to="/mentorship-hub">Mentorship Hub</Link>
				</li>
				<li>
					<Link to="/career-opportunities">Career Opportunities</Link>
				</li>
				<li>
					<Link to="/events-reunions">Events & Reunions</Link>
				</li>
				<li>
					<Link to="/success-stories">Success Stories</Link>
				</li>
				<li>
					<Link to="/resource-center">Resource Center</Link>
				</li>
				<li>
					<Link to="/contact-support">Contact & Support</Link>
				</li>
			</ul>
		</nav>
	);
}
