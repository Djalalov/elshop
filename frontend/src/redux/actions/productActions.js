import * as actionTypes from "../constants/poductConstants";
import axios from "axios";

export const getProducts = () => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get("/api/products");

		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		console.log(error);
	}
};

export const getProductDetails = id => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const removeProduct = () => dispatch => {
	dispatch({
		type: actionTypes.GET_PRODUCT_DETAILS_RESET,
	});
};
