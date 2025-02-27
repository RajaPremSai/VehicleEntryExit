const Joi = require("joi");

// User Registration Validation
const validateUserRegistration = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    empId: Joi.string().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    userType: Joi.string().valid("Faculty", "Non-Teaching Staff", "Other Staff", "Management").required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  validateRequest(req, res, next, schema);
};

// Vehicle Validation
const validateVehicle = (req, res, next) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    vehicleType: Joi.string().valid("Car", "Bike", "Truck", "Bus").required(),
    model: Joi.string().required(),
    ownerName: Joi.string().required(),
    vehicleNumber: Joi.string().pattern(/^[A-Z0-9-]+$/).required(),
    barcode: Joi.string().required()
  });

  validateRequest(req, res, next, schema);
};

// Log Entry Validation (for Security Guards)
const validateLogEntry = (req, res, next) => {
  const schema = Joi.object({
    vehicleNumber: Joi.string().required(),
    gate: Joi.string().required(),
    entryTime: Joi.date().iso().required()
  });

  validateRequest(req, res, next, schema);
};

// Admin User Creation Validation
const validateAdminCreation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  validateRequest(req, res, next, schema);
};

// Helper function to validate requests
const validateRequest = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validateUserRegistration,
  validateVehicle,
  validateLogEntry,
  validateAdminCreation
};

//Todo -- Write validation for visitor add , Security gaurd add , 