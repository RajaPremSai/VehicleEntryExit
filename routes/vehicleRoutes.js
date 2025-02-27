const express = require("express");
const {
  addVehicle,
  getUserVehicles,
} = require("../controllers/vehicleController.js");
const router = express.Router();
const { validateVehicle } = require("../middlewares/validation");

router.post("/add",validateVehicle, addVehicle);
router.get("/:userId", getUserVehicles);

module.exports = router;
