const express = require("express");
const router = express.Router();
const categoriesController = require("../../controllers/categories.controller");

router
  .route("/")
  .get(categoriesController.getCategories)
  .post(categoriesController.createCategories);

module.exports = router;
