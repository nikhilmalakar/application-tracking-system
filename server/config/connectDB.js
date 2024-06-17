import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((error) => {
      console.log("Error connecting database");
      console.error(error.message);
      process.exit(1);
    });
}
export default connectDB;