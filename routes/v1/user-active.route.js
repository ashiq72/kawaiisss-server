const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userActive.controller");

router.route("/").get(userController.getUserActive);

module.exports = router;
