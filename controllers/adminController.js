// controllers/adminController.js
const User = require("../models/User");
const SecurityGuard = require("../models/SecurityGuard");

exports.addSecurityGuard = async (req, res) => {
    try {
        const { name, empId, phone, email, password } = req.body;
        const newGuard = new SecurityGuard({ name, empId, phone, email, password });
        await newGuard.save();
        res.status(201).json({ message: "Security guard added", guard: newGuard });
    } catch (error) {
        res.status(500).json({ error: "Failed to add security guard" });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
};