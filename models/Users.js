const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please provide a first name"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "Please provide a last name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please provide a email"],
      unique: true,
      // lowerCase: true,
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Please provide a phone number"],
      unique: true,
    },
    gender: {
      type: String,
      trim: true,
      // lowerCase: true,
    },
    birth: {
      type: Date,
    },
    billingAddress: {
      type: String,
    },
    shippingAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
