// controllers/logController.js
const Log = require("../models/Log");

exports.addLog = async (req, res) => {
    try {
        const { vehicleId, gate, action, securityGuardId } = req.body;
        const newLog = new Log({ vehicleId, gate, action, securityGuardId });
        await newLog.save();
        res.status(201).json({ message: "Log entry added", log: newLog });
    } catch (error) {
        res.status(500).json({ error: "Failed to add log" });
    }
};

exports.getLogs = async (req, res) => {
    try {
        const logs = await Log.find().populate("vehicleId securityGuardId");
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch logs" });
    }
};
