import "./Navbar.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ click }) {
	const [scrolled, setScrolled] = React.useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});
	let navbarClasses = ["navbar"];
	if (scrolled) {
		navbarClasses.push("scrolled");
	}

	return (
		<nav className={navbarClasses.join(" ")}>
			{/*logo*/}
			<div>
				<Link to="/" className="navbar_logo">
					<span>Mern Shopping</span>
				</Link>
			</div>

			{/*links*/}
			<ul className="navbar_links">
				<li>
					<Link to="/cart" className="cart_link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cartlogo_badge">0</span>
						</span>
					</Link>
				</li>
				<li>
					<span className="shopBtn">Login</span>
				</li>
			</ul>

			{/*Hamburger menu*/}
			<div className="hamburger_menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}

export default Navbar;
