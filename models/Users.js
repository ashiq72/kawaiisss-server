const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    password_confirmation: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    birth: {
      type: String,
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
