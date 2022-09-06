const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Random User API Page!");
});

app.listen(port, () => {
  console.log(`Random User API App is listening on ${port}`);
});
