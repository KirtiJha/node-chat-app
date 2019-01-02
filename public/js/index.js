let socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'User 1',
  //   text: 'I want to go for a movie'
  // });

});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
