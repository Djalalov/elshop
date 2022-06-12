import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

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
		<>
			<HashRouter>
				<Navbar click={() => setsideToggle(true)} />
				<SideDrawer show={sideToggle} click={() => setsideToggle(false)} />
				<Backdrop show={sideToggle} click={() => setsideToggle(false)} />
				<main>
					<Routes>
						<Route exact path="/" element={<HomeScreen />} />
						<Route path="/product/:id" element={<ProductScreen />} />
						<Route path="/cart" element={<CartScreen />} />
					</Routes>
				</main>
			</HashRouter>
		</>
	);
}

export default App;
