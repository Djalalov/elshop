import "./ProductScreen.css";

function ProductScreen() {
	return (
		<div className="productscreen">
			<div className="productscreen_left">
				<div className="left_image">
					<img
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						alt="product name"
					/>
				</div>
			</div>
			<div className="productscreen_right">
				<div className="up_info">
					<h2 className="up_title">Product 1</h2>
					<p className="product_price">Price: $ 499</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						dolorum, minima sapiente provident architecto voluptatibus! Lorem
						ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
						quis, atque ut consectetur illo voluptas?
					</p>
				</div>
				<div className="below_info">
					<p>
						Status: <span>In stock</span>
					</p>
					<p>
						Qty{" "}
						<select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p>
						<button type="button" className="button_img">
							Add to Cart
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
