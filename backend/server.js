import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  customErrorHandler,
  notFoundHandler,
} from "./middleware/errorMiddleware.js";
import UserRoute from "./routes/userroutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

app.use(
  "/clientdata",
  express.static(path.join(__dirname, "/backend/uploads"))
);

app.use("/api/users", UserRoute);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.get("/", (req, res) => {
  res.send("Kaji is gay");
});

app.use(notFoundHandler);

app.use(customErrorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Listening on 5000");
});
