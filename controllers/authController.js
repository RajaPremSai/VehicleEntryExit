const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// exports.registerUser = async (req, res) => {
//     const { name, empId, phone, userType, email, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, empId, phone, userType, email, password: hashedPassword });

//     try {
//         await newUser.save();
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "User registration failed" });
//     }
// };

exports.registerUser = async (req, res) => {
  try {
    const { name, empId, phone, userType, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name,
      empId,
      phone,
      userType,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, userType: user.userType }, //added userType
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token, // Now includes token in response
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
