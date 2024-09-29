import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running. Use our API on port: 3000");
    });
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
