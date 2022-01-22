import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
	return (
		<div className="cartitem">
			<div className="cartitem_image">
				<img
					src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
					alt="product name"
				/>
			</div>
			<Link to={`/product/${111}`} className="cartitem_name">
				<p>Product 1</p>
			</Link>

			<p className="cartitem_price"> $499</p>

			<select className="cartitem_select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>

			<button className="cartitem_deleteBtn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default CartItem;
