import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Set port and MongoDB URI from environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDbURI;

// Connect to MongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Middleware to handle routes
app.use(express.json());  // Add middleware to handle JSON requests (if required)
app.use("/book", bookRoute);
app.use("/user", userRoute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
