const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dbConncect = require("./utils/dbConnect");
const userRoutes = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dbConncect();

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Random User API Page!");
});

app.all("*", (req, res) => {
  res.send("Oops! No Route Found.");
});

app.listen(port, () => {
  console.log(`Random User API App is listening on ${port}`);
});
