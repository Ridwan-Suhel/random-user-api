const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/all", userController.getAllUser);
router.patch("/all/:id", userController.updateUser);
router.get("/random", userController.getRandmonUser);

router.post("/save", userController.saveUser);

module.exports = router;
