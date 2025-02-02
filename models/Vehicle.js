const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    vehicleType: String,
    model: String,
    driverName: String,
    vehicleNumber: { type: String, unique: true },
    barcode: { type: String, unique: true }
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
