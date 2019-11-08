'use strict';

//created a onnection with client
//utilize the name space feature + rooms

//CORE CONNECTION
const io = require('socket.io')(3001);


io.on('connection', (socket) => {
  console.log('CORE connection', socket.id);
  socket.on('speak', (payload) => {
    io.emit('message', payload);
  });

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
  })
}); 

//=====================================
//subset of connection, more SPECIFICITY
const school = io.of('/school');
  school.on('connection', (socket) => {
    console.log('School connection', socket.id);

    socket.on('speak', (payload) => {
      school.emit('message', payload);
    });
    //Opt into a room
    socket.on('join', (room) => {
      socket.join(room);
    });
    //get data from room by providing new event
    socket.on('codefellows', (payload) => {
      school.to('codefellows').emit('channel', payload);
    })
  });

//now....
//1. Create an app that creates al the connetions
//2. Create a logger.
//=====================================
