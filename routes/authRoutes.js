const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();
const { validateUserRegistration } = require("../middlewares/validation");


router.post("/register",validateUserRegistration, registerUser);
router.post("/login", loginUser);

module.exports = router;
