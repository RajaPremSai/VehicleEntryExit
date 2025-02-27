// routes/logRoutes.js
const express = require("express");
const { addLog, getLogs } = require("../controllers/logController");
const router = express.Router();
const { validateLogEntry } = require("../middlewares/validation");

router.post("/add", validateLogEntry,addLog);
router.get("/", getLogs);

module.exports = router;
