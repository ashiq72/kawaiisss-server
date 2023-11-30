const Categories = require("../models/Categories");

exports.getCategoriesService = async (query) => {
  const products = await Categories.find({});
  return products;
};
exports.createCategoriesService = async (data) => {
  //save method
  const product = new Categories(data);
  const result = await product.save();
  return result;
};
