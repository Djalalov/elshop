require("dotenv");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connectt(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    log.info("MongoDB connection Successfully established");
  } catch (error) {
    console.log("MongoDb connection FAILED");
    process.exit(1);
  }
};
module.exports = connectDB;
