require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.getUserActiveService = async (token) => {
  const decodedToken = jwt.decode(token, process.env.TOKEN_SECRET);
  const userId = decodedToken.id;
  const user = await User.findOne({ _id: userId }).select("-password");

  return user;
};
