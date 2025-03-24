// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // For development only. Restrict origins in production.
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// A basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to GamersLobby Backend!');
});

// Socket.IO handling for real-time events
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Example: listening for a test event
  socket.on('testEvent', (data) => {
    console.log('Received testEvent:', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

