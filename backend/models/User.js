// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    default: '',
  },
  // Additional fields: avatar, bio, etc.
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
