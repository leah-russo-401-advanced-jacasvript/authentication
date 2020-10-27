'use strict';

const express = require('express');
const router = express.Router();
const schema = require('./auth/users.js');
const Collection = require('./collection.js');
const auth = require('./BasicAuthentication.js');
const db = new Collection(schema);

router.post('/signup', (req,res,next) => {
  //idk what goes here
  try {
    db.create(req.body)
    .then(results => {
      res.json(results);
      next();
    })
  } catch (error) {
    next(error);
  }
})

router.post('/signin', auth, (req,res,next)=> {
  try {
    res.json(req.body)
  } catch (error) {
    next(error);
  }
})

module.exports = router;