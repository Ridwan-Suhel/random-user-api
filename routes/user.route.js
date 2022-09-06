const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/all", userController.getAllUser);

router.post("/save", userController.saveUser);

module.exports = router;
