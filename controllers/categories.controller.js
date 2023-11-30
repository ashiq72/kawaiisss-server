const {
  getCategoriesService,
  createCategoriesService,
} = require("../services/categories.services");

// Dashboard product get
module.exports.getCategories = async (req, res, next) => {
  try {
    const products = await getCategoriesService();

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

module.exports.createCategories = async (req, res) => {
  try {
    const result = await createCategoriesService(req.body);

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
