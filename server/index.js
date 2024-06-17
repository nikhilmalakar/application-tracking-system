import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";


const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js"

// Use routes
app.use("/jobs", jobRoutes);
app.use("/users", userRoutes);


// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.redirect("/");
}
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
