// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const {
  addSecurityGuard,
  getAllUsers,
} = require("../controllers/adminController");

router.post("/add-security-guard", addSecurityGuard);
router.get("/users", getAllUsers);

module.exports = router;
