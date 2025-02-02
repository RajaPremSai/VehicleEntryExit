const express = require("express");
const {
  addVehicle,
  getUserVehicles,
} = require("../controllers/vehicleController.js");
const router = express.Router();

router.post("/add", addVehicle);
router.get("/:userId", getUserVehicles);

module.exports = router;
