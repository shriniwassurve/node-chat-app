const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: "abc.123@example.com",
    text: "Hey, I am abc",
    createAt: new Date()
  });

  socket.on('createMessage', (newEmail) => {
    const createdAt = new Date();
    const body = {...newEmail, createdAt: createdAt};
    console.log('Created Message is', body);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});
app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
