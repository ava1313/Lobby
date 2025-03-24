// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');  // JWT middleware
const User = require('../models/User');      // Mongoose model

router.get('/profile', auth, async (req, res) => {
  try {
    // Attempt to find user by ID from JWT
    const user = await User.findById(req.userId).select('-password');
    res.json({ user });
  } catch (error) {
    console.error(error);  // <--- logs error in the backend console
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
