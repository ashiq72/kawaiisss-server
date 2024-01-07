require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.getUserService = async (email, password) => {
  const user = await User.findOne({ email: email });
  // return user;

  if (!user) {
    return res.json({ error: "User does not exist" }, { status: 400 });
  }

  // check if password is correct
  const validPassword = password === user.password;

  if (!validPassword) {
    return res.json({ error: "invalid password" }, { status: 400 });
  }

  // create token data
  const tokenData = {
    id: user._id,
    username: user.name,
    email: user.email,
  };
  //create token
  const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
    expiresIn: "30ms",
  });
  return { token, user };
};

exports.getUserByEmailService = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

exports.createUserService = async (data) => {
  //save method
  console.log(data);
  const user = new User(data);
  const result = await user.save();
  console.log(result);
  return result;
};

exports.updateUserById = async (email, data) => {
  // Updating Using save()
  // console.log(data);
  const result = await User.updateOne(
    { email: email },
    { $set: data },
    { runValidators: true }
  );
  // Updating Using Queries
  // const user = await User.find({ email: email });
  // const result = await user.set(data).save();
  console.log(result);
  return result;
};
