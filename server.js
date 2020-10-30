'use strict';

//set up the express server
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const routes = require('./routes.js');
const extraRoutes = require('./extra-routes.js');
const cors = require('cors');
const discordRoute = require('./auth/routes/discord.js');

const app = express();
app.use(express.json());
app.use('/users', routes);
app.use(extraRoutes);
app.use(cors());
app.use(express.static('./public'));
app.use(discordRoute);


module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3001
    app.listen( PORT, ()=> console.log(`listening on port ${PORT}`))
  }
}