const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', generateMessage('admin', 'Welcome new user!'));
  socket.broadcast.emit('newMessage', generateMessage('admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    console.log('Created Message ', message);

    io.emit('newMessage', generateMessage(message.from,  message.text));
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});
app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
