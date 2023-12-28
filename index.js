require("dotenv").config();
const mongoose = require("mongoose");
const port = 5000;
const app = require("./app");

mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`Database connection is successful`);
});

app.listen(port, () => {
  console.log(`Server link ${port}`);
});
