'use strict';

const express = require('express');
const router = express.Router();
const oauth = require('../middleware/discord.js');

// Routes
router.get('/oauth', oauth, (req, res) => {
  console.log(req.token);
  console.log(req.user);
  res.status(200).send(req.token);
});

module.exports = router;