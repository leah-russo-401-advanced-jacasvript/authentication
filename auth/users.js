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
  return this.findOne({ username: username})
  .then(results=> {
    return this.comparePassword(password,results.password,results)
    
  })
}

usersSchema.statics.comparePassword = function(passwordOne,passwordTwo,obj) {
  const compare = bcrypt.compare(passwordOne,passwordTwo);
  if(compare) {
    return obj;
  } else {
    return null;
  }
}(

usersSchema.statics.token = function(username) {
  return jwt.sign({ username: username}, 'SECRET_STRING');
}

module.exports = mongoose.model('Users',usersSchema);