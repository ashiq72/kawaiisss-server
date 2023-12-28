const User = require("../models/Users");

exports.getUserService = async (email) => {
  const user = await User.find({ email: email });
  return user;
};
exports.createUserService = async (data) => {
  //save method
  const user = new User(data);
  const result = await user.save();
  return result;
};
exports.updateUserById = async (email, data) => {
  // Updating Using save()
  const result = await User.updateOne(
    { email: email },
    { $set: data },
    { runValidators: true }
  );

  // Updating Using Queries
  // const user = await User.find({ email: email });
  // const result = await user.set(data).save();

  return result;
};
