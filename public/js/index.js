var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createMessage', {
    from: "shri@example.com",
    text: "hey is shri"
  });

});

socket.on('newMessage', function (message) {
  console.log('New message is ', message);
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New Email', email);
});
