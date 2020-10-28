'use strict';

const express = require('express');
const router = express.Router();
const schema = require('./auth/users.js');
const Collection = require('./collection.js');
const auth = require('./BasicAuthentication.js');
const db = new Collection(schema);
const base64 = require('base-64');

router.post('/signup', (req,res,next) => {
  try {
    console.log(req.body);
    db.create(req.body)
    .then(results => {
      console.log(results)
      res.json(results);
      next();
    })
  } catch (error) {
    next(error);
  }
})


router.post('/signin', auth.basic, (req,res,next)=> {
  try {
    res.json(req.body)
  } catch (error) {
    next(error);
  }
})

module.exports = router;