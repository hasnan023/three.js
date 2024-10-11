// routes/protected.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Example protected route
router.get("/home", auth, (req, res) => {
  res.json({ msg: `Welcome, user ${req.user.id}` });
});

module.exports = router;
