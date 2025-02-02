const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
    gate: String,
    scannedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Security Guard
    entryTime: { type: Date, default: Date.now },
    exitTime: Date
});

module.exports = mongoose.model("Log", LogSchema);
