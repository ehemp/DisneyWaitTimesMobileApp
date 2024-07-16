// server/index.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Server } = require('ws');
const { authenticateSocket } = require('../middleware/authUser');
const app = express();
const server = http.createServer(app);
//const io = socketIo(server);
const cors = require('cors');
const authRoutes = require('../routes/auth');
const messageRoutes = require('../routes/message');
const frontend = `http://localhost:${process.env.PORT}`;
const otherend = `http://10.0.0.16:${process.env.PORT}`;
const backport = process.env.BACKPORT;

const io = socketIo(server, {
  cors: {
    origin: otherend, // Your frontend URL
    methods: ["GET", "POST"]
  }
});



// Use CORS middleware
/*app.use(cors({
  origin: frontend // Replace with your frontend's origin
}));*/
app.use(cors({
  origin: otherend // Replace with your frontend's origin
}));

// Middleware
app.use(express.json());

app.use('/auth', authRoutes); // Use the routes defined in auth.js

app.use('/message', messageRoutes);
// Connect to MongoDB
//const URI = process.env.DB_URI;
//mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.route('/').get((req, res) => {
  res.redirect('/home');
});

// Socket.io users connection
let connectedUsers = {};

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token) {
    // Verify token here (if needed)
    return next();
  }
  return next(new Error('Authentication error'));
});
io.use(authenticateSocket); // Apply socket authentication middleware
// Socket.io connection
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('user_connected', (username) => {
    connectedUsers[socket.id] = username;
    io.emit('update_user_list', Object.values(connectedUsers));
  });

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    delete connectedUsers[socket.id];
    io.emit('update_user_list', Object.values(connectedUsers));
  });
});

app.set('io', io); // Set the io instance in the app
const HOST = 'localhost'; // Replace with your local IP address
// Start Server
server.listen(process.env.BACKPORT, HOST, () => {
  console.log(`Server is running with host ${HOST}, on port ${backport}`);
});
