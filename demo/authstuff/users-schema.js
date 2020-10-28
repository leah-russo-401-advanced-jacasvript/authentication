'use strict';

const mongoose = require('mongoose');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const DemoSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true },
  password: {type: String, required: true},
});

DemoSchema.statics.authenticateBasic = async function(username,password) {
  this.findOne({ username: username })
  .then(async user => {
    //tell bcrypt to look at password and cehck databsse
    const isValid = await bcrypt.compare(password,userpassword)
  });
  if(isValid) {
    const token = user.generateToken();
    return token;
  }
}

DemoSchema.methods.generateToken = function() {
  let token = await jwt.sign({ username: this.username }, 'SECRET');
  return token;
}

module.exports = mongoose.model('DemoSchema', UserSchema);