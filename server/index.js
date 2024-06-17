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
// import studentRoutes from "./routes/studentRoutes.js";
// import tutorRoutes from "./routes/tutorRoutes.js";
// import testRoutes from "./routes/testRoutes.js";
// import languageRoutes from "./routes/languageRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
// import subscription from "./routes/subscriptionRoutes.js";


// Use routes
// app.use("/student", studentRoutes);
// app.use("/tutor", tutorRoutes);
// app.use("/test", testRoutes);
// app.use("/language", languageRoutes);
app.use("/job", jobRoutes);
// app.use("/subscription", subscription);


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
