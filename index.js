'use strict';

const server = require('./server.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  server.start()
});



