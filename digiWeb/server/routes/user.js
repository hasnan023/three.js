// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// user registration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({
      name,
      email,
      password,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    // res.send("User registered successfully");
    // console.log("JWT Secret:", process.env.JWT_SECRET);

    const payload = {
      user: {
        id: user.id,
      },
    };
    // Sign the JWT token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" }, // Token expiration time
      (err, token) => {
        if (err) throw err;
        res.json({ token, mes: "user resgitered successfully" });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// user Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Payload for JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign the JWT token and return it
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
