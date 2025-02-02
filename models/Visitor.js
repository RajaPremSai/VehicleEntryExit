const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
    name: String,
    vehicleNumber: String,
    driverName: String,
    purpose: String,
    entryTime: { type: Date, default: Date.now },
    exitTime: Date
});

module.exports = mongoose.model("Visitor", VisitorSchema);