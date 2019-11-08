'use strict';

const io = require('socket.io-client');
//global
const client = io.connect('http://localhost:3001');
//specific
const school = io.connect('http://localhost:3001/school');

client.emit('speak', 'here is my CORE event');
school.emit('speak', 'here is my school event');
school.emit('speak', 'here is my Codefellows event');