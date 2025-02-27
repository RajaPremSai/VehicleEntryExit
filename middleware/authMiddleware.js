const jwt = require("jsonwebtoken");
const User = require("../models/User"); 

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
};

// Middleware to restrict access to Admins only
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ message: "Access Forbidden. Admins only." });
    }
    next();
  };
  
  // Middleware to restrict access to Security Guards only
  const authorizeSecurity = (req, res, next) => {
    if (req.user.role !== "Security Guard") {
      return res.status(403).json({ message: "Access Forbidden. Security Guards only." });
    }
    next();
  };
  
  // Middleware to restrict access to Registered Users only (Faculty, Staff, etc.)
  const authorizeUser = (req, res, next) => {
    if (["Faculty", "Non-Teaching Staff", "Other Staff", "Management"].includes(req.user.role)) {
      return next();
    }
    return res.status(403).json({ message: "Access Forbidden. Registered users only." });
  };
  
  module.exports = { authenticate, authorizeAdmin, authorizeSecurity, authorizeUser };

// module.exports = authMiddleware;

module.exports = { authMiddleware, authorizeAdmin, authorizeSecurity, authorizeUser };
