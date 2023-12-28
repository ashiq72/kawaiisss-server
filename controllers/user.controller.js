const {
  getUserService,
  createUserService,
  updateUserById,
} = require("../services/user.services");

// Dashboard product get
module.exports.getUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const products = await getUserService(email);

    res.status(200).json({
      stauts: "successs",
      message: "Data get successfully!",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Can't get data!",
      error: error.message,
    });
  }
};

// Dashboard product create
module.exports.createUser = async (req, res) => {
  try {
    const result = await createUserService(req.body);

    res.status(200).json({
      stauts: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.updateUserById = async (req, res, next) => {
  try {
    const { email } = req.params;
    const data = req.body;
    const result = await updateUserById(email, data);

    res.status(200).json({
      stauts: "success",
      message: "Data update successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Couldn't update product (patch method)",
      error: error.message,
    });
  }
};
