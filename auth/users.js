'use strict';

const { MongoParseError } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

usersSchema.statics.basicAuth = function(username,password) {
  console.log(username,password);
  return this.find({'username': 'someuser'})
  .then(results => {
    console.log(results);
    return this.comparePassword(password,results.password,results)
    
  })
}

usersSchema.statics.comparePassword = function(password,passwordTwo,obj) {
  console.log(password)
  console.log(typeof(password));
  return bcrypt.compare(password,passwordTwo)
  .then(results => {
    console.log(results);
    console.log(obj);
    if(results) {
      return obj;
    } else {
      return null;
    }
  })
}

usersSchema.statics.token = function(username) {
  return jwt.sign({ username: username}, 'SECRET_STRING');
}

module.exports = mongoose.model('Users',usersSchema);