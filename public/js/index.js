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
  let li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#message').append(li);
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'Hi',
// }, function(data) {
//   console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function(e) {

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message').val()
  }, function() {

  })
  e.preventDefault();
});
