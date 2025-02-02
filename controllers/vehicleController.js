const Vehicle = require("../models/Vehicle");

exports.addVehicle = async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: "Error adding vehicle" });
    }
};

exports.getUserVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ owner: req.params.userId });
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving vehicles" });
    }
};
