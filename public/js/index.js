  var socket = io();
  socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //   from: 'Sangio',
    //   text: 'Yeah, tutto ok'
    // });
    // socket.emit('createEmail', {
    //   tp: "aboli75@gmail.com",
    //   text: "Ciao, sono Aboli"
    // })
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });

  // socket.on('newEmail', function(email) {
  //   console.log('New Email', email);
  // });
socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
