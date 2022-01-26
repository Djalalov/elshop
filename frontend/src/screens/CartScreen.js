import "./CartScreen.css";
import ScrollUp from "../components/scrollUp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Components
import CartItem from "../components/CartItem";

//Acitons
import { addToCart } from "../redux/actions/cartActions";

const CartScreen = () => {
	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);

	const { cartItems } = cart;

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};
	return (
		<div className="cartscreen">
			<div className="cartscreen_left">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your Cart is empty <Link> to="/>Go Back</Link>
					</div>
				) : (
					cartItems.map(item => (
						<CartItem item={item} qtyChangeHandler={qtyChangeHandler} />
					))
				)}
			</div>

			<div className="cartscreen_right">
				<div className="cartscreen_info">
					<p>Subtotal (0) items</p>
					<p>$499</p>
				</div>
				<div>
					<button>Proceed To Checkout</button>
				</div>
			</div>
			<div>
				<ScrollUp />
			</div>
		</div>
	);
};

export default CartScreen;
