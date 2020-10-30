'use strict';

//set up the express server
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const routes = require('./routes.js');
const extraRoutes = require('./extra-routes.js');

const app = express();
app.use(express.json());
app.use('/users', routes);
app.use(extraRoutes);


module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3001
    app.listen( PORT, ()=> console.log(`listening on port ${PORT}`))
  }
}