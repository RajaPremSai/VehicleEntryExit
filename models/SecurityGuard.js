// models/SecurityGuard.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecurityGuardSchema = new Schema({
    name: { type: String, required: true },
    empId: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("SecurityGuard", SecurityGuardSchema);