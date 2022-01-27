import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
	getProductsReducer,
	getProductDetailsReducer,
} from "./reducers/productReducers";

const thunkMiddleware = require("redux-thunk").default;

const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
});

//const middleware = { thunk };

const cartFromLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const INITIAL_STATE = {
	cart: {
		cartItems: cartFromLocalStorage,
	},
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
