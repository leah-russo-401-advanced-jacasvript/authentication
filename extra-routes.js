'use strict';

const express = require('express');
const router = express.Router();
const bearerMiddleware = require('./auth/bearer-auth.js');

router.get('/secret', bearerMiddleware.bearer, (req,res) => {
  console.log(req.token);
  console.log(req.username)
  res.json(req.username);
})

module.exports = router;

//bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWV1c2VyIiwiaWF0IjoxNjA0MDE4NzAwfQ.fA9i9x4pub6YGvZL4Da6PPsBLU-Ad1M0d7nFl71jiWs