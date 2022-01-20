const express = require("express");
const router = express.Router();
const {
	getAllProducts,
	getProductById,
} = require("../controller/productController");
//@desc GET all the products from DB
//@route GET /api/products
//@access Public

router.get("/", getAllProducts);

//@desc GET a product from DB
//@route GET /api/products/:id

router.get("/:id", getProductById);

/* router.get("/", (req, res) => {});

router.get("/", (req, res) => {}); */

module.exports = router;
