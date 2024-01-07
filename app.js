const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routers
const productRoute = require("./routes/v1/product.route");
const userRoute = require("./routes/v1/user.route");
const userActiveRoute = require("./routes/v1/user-active.route");
const categoriesRoute = require("./routes/v1/categories.route");

app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/user-active", userActiveRoute);
app.use("/api/v1/categories", categoriesRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
