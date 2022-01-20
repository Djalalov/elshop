require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.ATLAS_URI, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB database has been connected successfully!! ");
	} catch (error) {
		console.error("MongoDB connection Failed");
		process.exit(1);
	}
};
module.exports = connectDB;
