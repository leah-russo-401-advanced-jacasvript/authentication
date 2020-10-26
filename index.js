'use strict';

const server = require('./server.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI);

server.listen(PORT || 3001, ()=> {
  console.log(`server running on port ${PORT}`)
})

