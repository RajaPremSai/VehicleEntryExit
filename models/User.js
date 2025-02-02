const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    empId: { type: String, unique: true },
    phone: String,
    userType: String,  // Faculty, Staff, Management
    email: { type: String, unique: true },
    password: String,
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }]
});

module.exports = mongoose.model("User", UserSchema);
