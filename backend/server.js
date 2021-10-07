import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();
app.use(
  "/clientdata",
  express.static(path.join(__dirname, "/backend/uploads"))
);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.get("/", (req, res) => {
  res.send("Kaji is gay");
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
