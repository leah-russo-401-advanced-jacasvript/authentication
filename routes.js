'use strict';

const express = require('express');
const router = express.Router();
const schema = require('./auth/users.js');
const Collection = require('./collection.js');
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

router.post('/signin', (req,res,next)=> {

})

module.exports = router;