// server.js
require('dotenv').config(); // <-- Must be the first line
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// ...

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Lobby Backend is running with MongoDB!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);
