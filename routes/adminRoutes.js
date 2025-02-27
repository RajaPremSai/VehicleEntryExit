// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const {
  addSecurityGuard,
  getAllUsers,
} = require("../controllers/adminController");
const { authenticate, authorizeAdmin } = require("../middlewares/auth");
// const { validateAdminCreation } = require("../middlewares/validation");

router.post("/add-security-guard", addSecurityGuard);
router.get("/users", authenticate, authorizeAdmin, getAllUsers);

module.exports = router;

//Todo -- > Validation
//Todo -- Admin can add university vehicles (router.post("/add-university-vehicle")).