import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<div className="product">
			<img
				src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				alt="product name"
			/>

			<div className="product_info">
				<p className="info_name">Product 1</p>
				<p className="info_description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum,
					eius architecto sint fuga aliquid earum?
				</p>

				<p className="info_price">$500</p>
				<Link to={`/product/${1111}`} className="info_button">
					View
				</Link>
			</div>
		</div>
	);
};

export default Product;
