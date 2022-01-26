import "./scrollUp.css";
import { useState, useEffect } from "react";

const ScrollUp = () => {
	const [isVisable, setIsVisable] = useState(false);
	const toggleVisibility = () => {
		if (window.pageYOffset > 500) {
			setIsVisable(true);
		} else {
			setIsVisable(false);
		}
	};
	const scrollToUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
	});

	return (
		isVisable && (
			<div className="scrollDiv">
				<button onClick={scrollToUp} className="scrollBtn">
					<i className="fas fa-arrow-circle-up"></i>
				</button>
			</div>
		)
	);
};
export default ScrollUp;
