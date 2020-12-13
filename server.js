const express = require('express');
const peopleRouter = require('./api/peopleRouter.js');

const server = express();

server.use(express.json());
server.use('/api/people', peopleRouter);


module.exports = server;