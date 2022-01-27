import "./SideDrawer.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = ["sideDrawer"];

	if (show) {
		sideDrawerClass.push("show");
	}

	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};

	return (
		<div className={sideDrawerClass.join(" ")}>
			<ul className="sidedrawer_links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fa fa-shopping-cart"></i>
						<span>
							Cart{" "}
							<span className="sidedrawer_cartbadge">{getCartCount()}</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
