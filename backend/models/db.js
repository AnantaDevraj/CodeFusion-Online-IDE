var mongoose = require("mongoose");
var dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MongoDB URI is not defined in environment variables.");
        }

        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        if (error.code === 'ENOTFOUND') {
            console.error("DNS lookup failed. Please check your MongoDB URI and network connection.");
        }
        process.exit(1);
    }
};

module.exports = connectDB;
