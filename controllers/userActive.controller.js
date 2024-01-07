const { getUserActiveService } = require("../services/userActive.services");

module.exports.getUserActive = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const user = await getUserActiveService(token);

    res.status(200).json({
      stauts: "successs",
      message: "Data get successfully!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Can't get data!",
      error: error.message,
    });
  }
};
