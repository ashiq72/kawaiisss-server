const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello World! About page");
});

app.listen(port, () => {
  console.log(`Server link ${port}`);
});
