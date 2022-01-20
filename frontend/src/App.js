import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
	const [sideToggle, setsideToggle] = useState(false);
	return (
		<Router>
			<Navbar />
			<SideDrawer show={sideToggle} />
			<Backdrop show={sideToggle} />
			<main>
				<Routes>
					<Route exact path="/" element={HomeScreen} />
					<Route exact path="/product/:id" element={ProductScreen} />
					<Route exact path="/cart" element={CartScreen} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
