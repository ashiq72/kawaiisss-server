const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");
router
  .route("/:email")
  .get(userController.getUser)
  .patch(userController.updateUserById);

router.route("/").post(userController.createUser);

module.exports = router;
