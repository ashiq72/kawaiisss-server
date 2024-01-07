const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");
router
  .route("/:email")
  .get(userController.getUserByEmail)
  .patch(userController.updateUserById);

router.route("/").post(userController.createUser).get(userController.getUser);

module.exports = router;
