import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			{/*logo*/}
			<div className="navbar_logo">
				<h2>Mern Shopping Carts</h2>
			</div>

			{/*links*/}
			<ul className="navbar_links">
				<li>
					<Link to="/cart" className="cart_link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cartlogo_badge">@</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
			{/*Hamburger menu*/}
			<div className="hamburger_menu">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}

export default Navbar;
