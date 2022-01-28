import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {
	const { id } = useParams();
	const history = useNavigate();
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.getProductDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		if (product && id !== product._id) {
			dispatch(getProductDetails(id));
		}
	}, [dispatch, product, id]);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		history("/cart");
	};
	const goBacktHandler = () => {
		history("/");
	};

	return (
		<div className="productscreen">
			{loading ? (
				<h2>Loading ... </h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<>
					<div className="productscreen_left">
						<div className="left_image">
							<img src={product.imageURL} alt={product.title} />
						</div>
					</div>
					<div className="productscreen_right">
						<div className="up_info">
							<h2 className="up_title">{product.title} </h2>
							<p className="product_price">Price: $ {product.price}</p>
							<p>Description: {product.description}</p>
						</div>
						<div className="below_info">
							<p>
								Status:{" "}
								<span>
									{product.countInStock > 0 ? "In stock" : "Out of stock"}
								</span>
							</p>
							<p>
								Qty{" "}
								<select value={qty} onChange={e => setQty(e.target.value)}>
									{[...Array(product.countInStock).keys()].map(x => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button
									type="button"
									onClick={addToCartHandler}
									className="button_img"
								>
									Add to Cart
								</button>
							</p>
							<p>
								<button
									type="button"
									onClick={goBacktHandler}
									className="button_img"
								>
									Go Back
								</button>
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductScreen;
