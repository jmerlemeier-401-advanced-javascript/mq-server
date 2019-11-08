'use strict';

const io = require('socket.io-client');

const core = io.connect('http://localhost:3001');
const school = io.connect('http://localhost:3001/school');

school.emit('join', 'codefellows');

core.on('message', payload => console.log(payload));
school.on('message', payload => console.log(payload));
school.on('channel', (payload) => {
  console.log('test blah blah from codefellows', payload)
})