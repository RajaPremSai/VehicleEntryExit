// routes/logRoutes.js
const express = require("express");
const { addLog, getLogs } = require("../controllers/logController");
const router = express.Router();

router.post("/add", addLog);
router.get("/", getLogs);

module.exports = router;
