// controllers/visitorController.js
const Visitor = require("../models/Visitor");

exports.addVisitor = async (req, res) => {
    try {
        const { vehicleNumber, driverName, purpose, gate } = req.body;
        const newVisitor = new Visitor({ vehicleNumber, driverName, purpose, gate });
        await newVisitor.save();
        res.status(201).json({ message: "Visitor logged", visitor: newVisitor });
    } catch (error) {
        res.status(500).json({ error: "Failed to log visitor" });
    }
};

exports.getVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.status(200).json(visitors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch visitors" });
    }
};